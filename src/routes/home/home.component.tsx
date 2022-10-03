import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../store/hooks'

import {
	selectMemoisedMemoList,
	resetIsCreated,
	resetIsEdited,
	resetMemo,
} from '../../store/memo/memoSlice'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import MemoList from '../../components/memo-list/memo-list.component'
import FloatingButton from '../../components/floating-button/floating-button.component'
import Placeholder from '../../components/placeholder/placeholder.components'
import Toast from '../../components/toast/toast.component'

import { HomeContainer } from './home.styles'

export default function Home() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const { isCreated, isEdited, memoList } = useAppSelector(
		selectMemoisedMemoList,
	)

	const handleCreate = (e: MouseEvent<HTMLButtonElement>): void => {
		dispatch(resetMemo())
		dispatch(resetIsCreated())
		dispatch(resetIsEdited())
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

			{memoList.length === 0 ? (
				<Placeholder
					placeholderType="home"
					title="메모가 없습니다."
					body="새 메모를 등록해 보세요."
				/>
			) : (
				<div className="contents-container">
					{/* Disabled for now
        <MemoList title="즐겨찾기한 메모" isFoldable /> */}
					<MemoList title="메모 리스트" memoList={memoList} />
				</div>
			)}

			<div className="floating-container">
				{isCreated && (
					<Toast toastType="success" text="메모를 성공적으로 추가했습니다." />
				)}
				{isEdited && (
					<Toast toastType="success" text="메모를 성공적으로 저장했습니다." />
				)}
				<FloatingButton
					text="새 메모"
					icon="write"
					handleClick={handleCreate}
				/>
			</div>
		</HomeContainer>
	)
}
