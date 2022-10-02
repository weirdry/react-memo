import { useState, useEffect, MouseEvent, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
	setMemo,
	selectMemoisedMemoList,
	setIsEdited,
	resetIsEdited,
	editMemo,
} from '../../store/memo/memoSlice'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import MemoDetails from '../../components/memo-details/memo-details.component'

import { ViewMemoContainer } from './view-memo.styles'

export default function ViewMemo() {
	const [isDisabled, setIsDisabled] = useState<boolean>(true)

	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const { memo } = useAppSelector(selectMemoisedMemoList)

	const handleBackwards = (e: MouseEvent<HTMLButtonElement>): void =>
		navigate('/')

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
		dispatch(setMemo({ ...memo, [e.target.name]: e.target.value }))

		// setMemo((prevState) => ({
		// 	...prevState,
		// 	[e.target.name]: e.target.value,
		// }))
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
							<IconButton icon="more" />
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
		</ViewMemoContainer>
	)
}
