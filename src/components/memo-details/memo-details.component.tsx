import { useEffect, ChangeEvent } from 'react'
import { useParams } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import {
	Memo,
	selectMemoisedMemoList,
	setMemo,
} from '../../store/memo/memoSlice'

import Card from '../../components/card/card.component'
import Input from '../input/input.component'

import { MemoDetailsContainer } from './memo-details.styles'

const initialValue: Memo = {
	id: '',
	title: '',
	body: '',
	createdAt: new Date().toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	}),
	isPinned: false,
}

type MemoDetailsProps = {
	handleTitleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
	handleBodyChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export default function MemoDetails(props: MemoDetailsProps) {
	const { handleTitleChange, handleBodyChange } = props

	const { memo, memoList } = useAppSelector(selectMemoisedMemoList)

	const { memo_id } = useParams()
	const dispatch = useAppDispatch()

	const getMemo = (): Memo => {
		const selectedMemo = memoList.find(
			(storedMemo) => storedMemo.id === memo_id,
		)

		if (selectedMemo) {
			return selectedMemo
		} else {
			return initialValue
		}
	}

	useEffect(() => {
		dispatch(setMemo(getMemo()))
		// eslint-disable-next-line
	}, [])

	return (
		<Card cardType="detailed">
			<MemoDetailsContainer>
				<div className="heading-container">
					<Input
						inputType="title"
						placeholder="제목을 입력해 주세요."
						handleChange={handleTitleChange}
						value={memo?.title}
					/>
					<span>{memo?.createdAt}</span>
				</div>
				<Input
					inputType="body"
					placeholder="내용을 입력해 주세요."
					handleChange={handleBodyChange}
					value={memo?.body}
				/>
			</MemoDetailsContainer>
		</Card>
	)
}

MemoDetails.defaultProps = {
	handleTitleChange: (e: ChangeEvent<HTMLTextAreaElement>) => {},
	handleBodyChange: (e: ChangeEvent<HTMLTextAreaElement>) => {},
}
