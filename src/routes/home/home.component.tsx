import { MouseEvent } from 'react'

import { useAppSelector } from '../../store/hooks'

import { selectMemoisedMemoList } from '../../store/memo/memoSlice'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import MemoList from '../../components/memo-list/memo-list.component'
import Placeholder from '../../components/placeholder/placeholder.components'
import TagBar from '../../components/tag-bar/tag-bar.component'

import { HomeContainer } from './home.styles'

export default function Home() {
	const { pinnedMemoList, unpinnedMemoList } = useAppSelector(
		selectMemoisedMemoList,
	)

	const handleEdit = (e: MouseEvent<HTMLButtonElement>) => {}

	return (
		<HomeContainer>
			<ToolBar
				title="MEMOWISE"
				rightSideChildren={
					<IconButton icon="setting" handleClick={handleEdit} />
				}
			></ToolBar>

			<TagBar />

			{pinnedMemoList.length === 0 && unpinnedMemoList.length === 0 ? (
				<Placeholder
					placeholderType="home"
					title="메모가 없습니다."
					body="새 메모를 등록해 보세요."
				/>
			) : (
				<div className="contents-container">
					{pinnedMemoList.length !== 0 && (
						<MemoList
							title="즐겨찾기한 메모"
							isFoldable
							memoList={pinnedMemoList}
						/>
					)}
					{unpinnedMemoList.length !== 0 && (
						<MemoList title="메모 리스트" memoList={unpinnedMemoList} />
					)}
				</div>
			)}
		</HomeContainer>
	)
}
