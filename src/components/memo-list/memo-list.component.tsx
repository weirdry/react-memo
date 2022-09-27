import Accordion from '../accordion/accordion.component'
import MemoItem from '../memo-item/memo-item.component'

import { MemoListContainer } from './memo-list.styles'

type MemoListProps = {
	title: string
	isFoldable: boolean
}

export default function MemoList(props: MemoListProps) {
	const { title, isFoldable } = props

	return (
		<MemoListContainer>
			{isFoldable ? (
				<Accordion text={title}>
					<MemoItem />
					<MemoItem />
				</Accordion>
			) : (
				<>
					<h1>{title}</h1>
					<MemoItem />
					<MemoItem />
				</>
			)}
		</MemoListContainer>
	)
}

MemoList.defaultProps = {
	title: '메모 리스트',
	isFoldable: false,
}
