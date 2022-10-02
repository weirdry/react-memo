import { useState, useEffect, MouseEvent, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { Memo } from '../../store/memo/memoSlice'

import { useAppDispatch } from '../../store/hooks'
import {
	addMemo,
	setIsCreated,
	resetIsCreated,
} from '../../store/memo/memoSlice'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import Card from '../../components/card/card.component'
import Input from '../../components/input/input.component'

import { CreateMemoContainer } from './create-memo.styles'

export default function CreateMemo() {
	const [memo, setMemo] = useState<Memo>({
		id: '',
		title: '',
		body: '',
		createdAt: new Date().toLocaleDateString('ko-KR', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		}),
	})
	const [isDisabled, setIsDisabled] = useState<boolean>(true)

	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const handleBackwards = (e: MouseEvent<HTMLButtonElement>): void =>
		navigate('/')

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
		setMemo((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()

		const dateCreatedAt = new Date().toLocaleDateString('ko-KR', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		})
		setMemo((prevState) => ({
			...prevState,
			createdAt: dateCreatedAt,
		}))

		dispatch(addMemo(memo))

		dispatch(setIsCreated(true))
		setTimeout(() => dispatch(resetIsCreated()), 2000)

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
					<Card cardType="detailed">
						<div className="inputs-container">
							<Input
								inputType="title"
								placeholder="제목을 입력해 주세요."
								handleChange={handleChange}
							/>
							<Input
								inputType="body"
								placeholder="내용을 입력해 주세요."
								handleChange={handleChange}
							/>
						</div>
					</Card>
				</div>
			</form>
		</CreateMemoContainer>
	)
}
