import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { selectMemo } from '../../store/reducers/memo/memoSlice'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import MemoList from '../../components/memo-list/memo-list.component'
import FloatingButton from '../../components/floating-button/floating-button.component'

import { HomeContainer } from './home.styles'

export default function Home() {
	const navigate = useNavigate()

	const { memoList } = useSelector(selectMemo)

	const handleCreate = (e: MouseEvent<HTMLButtonElement>): void =>
		navigate('/create-memo')
	const handleSelect = (e: MouseEvent<HTMLButtonElement>) => {}

	return (
		<HomeContainer>
			<ToolBar
				title="MEMOWISE"
				rightSideChildren={
					<IconButton icon="setting" handleClick={handleSelect} />
				}
			></ToolBar>

			<div className="lists-container">
				{/* Disabled for now
        <MemoList title="즐겨찾기한 메모" isFoldable /> */}
				{memoList.length !== 0 && <MemoList title="메모 리스트" />}
			</div>

			<FloatingButton text="새 메모" icon="write" handleClick={handleCreate} />
		</HomeContainer>
	)
}
