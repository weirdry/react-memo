import MemoItem from '../memo-item/memo-item.component'

import { MemoListContainer } from './memo-list.styles'

type MemoListProps = {
	title: string
}

export default function MemoList(props: MemoListProps) {
	const { title } = props

	return (
		<MemoListContainer>
			<h1>{title}</h1>
			<MemoItem />
			<MemoItem />
		</MemoListContainer>
	)
}

MemoList.defaultProps = {
	title: '메모 리스트',
}
