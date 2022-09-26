import MemoItem from '../memo-item/memo-item.component'

import { MemoListContainer } from './memo-list.styles'

export default function MemoList() {
	return (
		<MemoListContainer>
			<h1>메모 리스트</h1>
			<MemoItem />
			<MemoItem />
		</MemoListContainer>
	)
}
