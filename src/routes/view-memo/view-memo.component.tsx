import { useState, useEffect, MouseEvent, ChangeEvent, FormEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
	Memo,
	setMemo,
	selectMemoisedMemoList,
	editMemo,
	setIsModified,
	resetIsModified,
	initialState,
} from '../../store/memo/memoSlice'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import MemoDetails from '../../components/memo-details/memo-details.component'

import { ViewMemoContainer } from './view-memo.styles'
import MemoSetting from '../../components/memo-setting/memo-setting.component'
import BottomSheet from '../../components/bottom-sheet/bottom-sheet.component'

export default function ViewMemo() {
	const [isDisabled, setIsDisabled] = useState<boolean>(true)
	const [isSettingOpened, setIsSettingOpened] = useState<boolean>(false)

	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const { memo_id } = useParams()
	const { memo, memoList } = useAppSelector(selectMemoisedMemoList)

	const getMemo = (): Memo => {
		const selectedMemo = memoList.find(
			(storedMemo) => storedMemo.id === memo_id,
		)

		if (selectedMemo) {
			return selectedMemo
		} else {
			return initialState.memo
		}
	}

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

		dispatch(
			setIsModified({ modifiactionType: 'memo', modificationState: 'edited' }),
		)
		setTimeout(() => dispatch(resetIsModified()), 2000)

		navigate('/')
	}

	const handleMenu = (
		e: MouseEvent<HTMLButtonElement | HTMLDivElement>,
	): void => setIsSettingOpened(!isSettingOpened)

	useEffect(() => {
		const { title, body } = memo

		if (title === '' && body === '') {
			setIsDisabled(() => true)
		} else {
			setIsDisabled(() => false)
		}
	}, [memo])

	useEffect(() => {
		dispatch(setMemo(getMemo()))
		// eslint-disable-next-line
	}, [])

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

			{isSettingOpened && (
				<BottomSheet title="메모 설정" handleClose={handleMenu}>
					<MemoSetting />
				</BottomSheet>
			)}
		</ViewMemoContainer>
	)
}
