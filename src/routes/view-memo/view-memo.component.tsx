import { useState, useEffect, MouseEvent, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
	setMemo,
	selectMemoisedMemoList,
	setIsEdited,
	resetIsEdited,
	editMemo,
	editMemoPin,
} from '../../store/memo/memoSlice'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import MemoDetails from '../../components/memo-details/memo-details.component'
import BottomSheet from '../../components/bottom-sheet/bottom-sheet.component'
import OverlayItem from '../../components/overlay-item/overlay-item.component'

import { ViewMemoContainer } from './view-memo.styles'

export default function ViewMemo() {
	const [isDisabled, setIsDisabled] = useState<boolean>(true)
	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)

	// Need to change from useState to slice below
	// const [isPinned, setIsPinned] = useState<boolean>(false)

	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const { memo } = useAppSelector(selectMemoisedMemoList)

	const handleBackwards = (e: MouseEvent<HTMLButtonElement>): void =>
		navigate('/')

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
		dispatch(setMemo({ ...memo, [e.target.name]: e.target.value }))
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()

		const dateCreatedAt = new Date().toLocaleDateString('ko-KR', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		})

		dispatch(setMemo({ ...memo, createdAt: dateCreatedAt }))
		dispatch(editMemo)

		dispatch(setIsEdited(true))
		setTimeout(() => dispatch(resetIsEdited()), 2000)

		navigate('/')
	}

	const handleMenu = (e: MouseEvent<HTMLButtonElement>): void =>
		setIsMenuOpened(!isMenuOpened)

	const handlePin = (e: MouseEvent<HTMLButtonElement>): void =>
		dispatch(editMemoPin)
	// setIsPinned(!isPinned)

	const handleDelete = (e: MouseEvent<HTMLButtonElement>): void => {}

	useEffect(() => {
		const { title, body } = memo

		if (title === '' && body === '') {
			setIsDisabled(() => true)
		} else {
			setIsDisabled(() => false)
		}
	}, [memo])

	return (
		<ViewMemoContainer>
			<form onSubmit={handleSubmit}>
				<ToolBar
					isLeftSideOn
					leftSideChildren={
						<IconButton icon="close" handleClick={handleBackwards} />
					}
					rightSideChildren={
						<>
							<IconButton icon="more" handleClick={handleMenu} />
							<IconButton icon="confirm" type="submit" disabled={isDisabled} />
						</>
					}
				/>

				<div className="body-container">
					<MemoDetails
						handleTitleChange={handleChange}
						handleBodyChange={handleChange}
					/>
				</div>
			</form>

			{isMenuOpened && (
				<BottomSheet title="메모 수정" handleClose={handleMenu}>
					<OverlayItem
						icon="pin"
						text="즐겨찾기 메모로 지정"
						isToggle
						isActivated={memo.isPinned}
						handleClick={handlePin}
					/>
					<OverlayItem
						isSystem
						icon="delete"
						text="메모 삭제"
						handleClick={handleDelete}
					/>
				</BottomSheet>
			)}
		</ViewMemoContainer>
	)
}
