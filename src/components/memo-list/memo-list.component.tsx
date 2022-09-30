import { Memo } from '../../store/memo/memoSlice'
import Accordion from '../accordion/accordion.component'
import MemoItem from '../memo-item/memo-item.component'

import { MemoListContainer } from './memo-list.styles'

type MemoListProps = {
	title: string
	isFoldable: boolean
	memoList?: Memo[]
}

export default function MemoList(props: MemoListProps) {
	const { title, isFoldable, memoList } = props

	return (
		<MemoListContainer>
			{isFoldable ? (
				<Accordion text={title}>
					{memoList &&
						memoList.map((memo) => <MemoItem key={memo.id} memo={memo} />)}
				</Accordion>
			) : (
				<>
					<h1>{title}</h1>
					{memoList &&
						memoList.map((memo) => <MemoItem key={memo.id} memo={memo} />)}
				</>
			)}
		</MemoListContainer>
	)
}

MemoList.defaultProps = {
	title: '메모 리스트',
	isFoldable: false,
}
