import { useState, useEffect, MouseEvent, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import {
	setMemo,
	addMemo,
	setIsModified,
	selectMemoisedMemoList,
	resetIsModified,
} from '../../store/memo/memoSlice'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import MemoDetails from '../../components/memo-details/memo-details.component'

import { CreateMemoContainer } from './create-memo.styles'

export default function CreateMemo() {
	const [isDisabled, setIsDisabled] = useState<boolean>(true)

	const { memo } = useAppSelector(selectMemoisedMemoList)

	const navigate = useNavigate()
	const dispatch = useAppDispatch()

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
		dispatch(addMemo)

		dispatch(setIsModified('created'))
		setTimeout(() => dispatch(resetIsModified()), 2000)

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
		<CreateMemoContainer>
			<form onSubmit={handleSubmit}>
				<ToolBar
					isLeftSideOn
					leftSideChildren={
						<IconButton icon="close" handleClick={handleBackwards} />
					}
					rightSideChildren={
						<IconButton icon="confirm" type="submit" disabled={isDisabled} />
					}
				/>

				<div className="body-container">
					<MemoDetails
						handleTitleChange={handleChange}
						handleBodyChange={handleChange}
					/>
				</div>
			</form>
		</CreateMemoContainer>
	)
}
