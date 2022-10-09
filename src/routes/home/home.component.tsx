import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../store/hooks'

import {
	resetIsModified,
	selectMemoisedMemoList,
	resetMemo,
} from '../../store/memo/memoSlice'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import MemoList from '../../components/memo-list/memo-list.component'
import FloatingButton from '../../components/floating-button/floating-button.component'
import Placeholder from '../../components/placeholder/placeholder.components'
import Toast from '../../components/toast/toast.component'
import TagBar from '../../components/tag-bar/tag-bar.component'

import { HomeContainer } from './home.styles'

export default function Home() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const { isModified, pinnedMemoList, unpinnedMemoList } = useAppSelector(
		selectMemoisedMemoList,
	)

	const selectedToast = (toastType: typeof isModified): JSX.Element | null => {
		switch (toastType.modificationState) {
			case 'none':
				return null
			case 'created':
				return (
					<Toast
						toastType="success"
						text={`${
							toastType.modifiactionType === 'memo' ? '메모를' : '태그를'
						} 성공적으로 추가했습니다.`}
					/>
				)
			case 'edited':
				return (
					<Toast
						toastType="success"
						text={`${
							toastType.modifiactionType === 'memo' ? '메모를' : '태그를'
						} 성공적으로 변경했습니다.`}
					/>
				)
			case 'deleted':
				return (
					<Toast
						toastType="delete"
						text={`${
							toastType.modifiactionType === 'memo' ? '메모를' : '태그를'
						} 성공적으로 삭제했습니다.`}
					/>
				)
			default:
				return null
		}
	}

	const handleCreate = (e: MouseEvent<HTMLButtonElement>): void => {
		dispatch(resetMemo())
		dispatch(resetIsModified())
		navigate('/create-memo')
	}
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

			<div className="floating-container">
				{selectedToast(isModified)}

				<FloatingButton
					text="새 메모"
					icon="write"
					handleClick={handleCreate}
				/>
			</div>
		</HomeContainer>
	)
}
