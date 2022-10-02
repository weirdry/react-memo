import { useParams } from 'react-router-dom'

import { useAppSelector } from '../../store/store'
import { Memo, selectMemoisedMemoList } from '../../store/memo/memoSlice'

import Card from '../../components/card/card.component'

import { MemoDetailsContainer } from './memo-details.styles'

const initialValue: Memo = {
	id: '',
	title: '',
	body: '',
	createdAt: '',
}

export default function MemoDetails() {
	const { memoList } = useAppSelector(selectMemoisedMemoList)

	const { memo_id } = useParams()

	const getMemo = (): Memo => {
		const selectedMemo = memoList?.find(
			(storedMemo) => storedMemo.id === memo_id,
		)

		if (selectedMemo) {
			return selectedMemo
		} else {
			return initialValue
		}
	}
	const memo: Memo = getMemo()

	return (
		<Card cardType="detailed">
			<MemoDetailsContainer>
				<div className="heading-container">
					<h1>{memo.title}</h1>
					<span>{memo.createdAt}</span>
				</div>
				<p>{memo.body}</p>
			</MemoDetailsContainer>
		</Card>
	)
}
