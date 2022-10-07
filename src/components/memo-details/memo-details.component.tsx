import { ChangeEvent } from 'react'

import { useAppSelector } from '../../store/hooks'
import { selectMemoisedMemoList } from '../../store/memo/memoSlice'

import Card from '../../components/card/card.component'
import Input from '../input/input.component'
import TagList from '../tag-list/tag-list.component'

import { MemoDetailsContainer } from './memo-details.styles'

type MemoDetailsProps = {
	handleTitleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
	handleBodyChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export default function MemoDetails(props: MemoDetailsProps) {
	const { handleTitleChange, handleBodyChange } = props

	const { memo } = useAppSelector(selectMemoisedMemoList)

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
				<TagList />
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
