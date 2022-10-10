import { ChangeEvent, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import {
	selectMemoisedMemoList,
	resetTag,
	setSelectedTag,
} from '../../store/memo/memoSlice'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import Chip from '../../components/chip/chip.component'

import { ViewTagContainer } from './view-tag.styles'

export default function ViewTag() {
	const { memoList, tagList, selectedTag } = useAppSelector(
		selectMemoisedMemoList,
	)

	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const handleBackwards = (e: MouseEvent<HTMLButtonElement>): void =>
		navigate(-1)

	const handleSelectTag = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setSelectedTag(e.target.value))
		navigate('/')
	}

	const handleCreateTag = (e: MouseEvent<HTMLDivElement>): void => {
		dispatch(resetTag())
		navigate('/create-tag')
	}

	return (
		<ViewTagContainer>
			<ToolBar
				isLeftSideOn
				leftSideChildren={
					<IconButton icon="close" handleClick={handleBackwards} />
				}
				rightSideChildren={<IconButton icon="setting" />}
			/>

			<div className="body-container">
				<h2>태그 리스트</h2>

				<div className="tags-container">
					<Chip
						chipType="radio"
						text="전체"
						count={memoList.length}
						isDefault
						handleChange={handleSelectTag}
						checked={selectedTag === ''}
					/>
					{tagList.map((storedTag, index) => (
						<Chip
							key={index}
							text={storedTag.name}
							count={storedTag.count}
							handleChange={handleSelectTag}
							checked={storedTag.name === selectedTag}
						/>
					))}
					<Chip
						chipType="button"
						symbol="+"
						text="새 태그"
						handleClick={handleCreateTag}
					/>
				</div>
			</div>
		</ViewTagContainer>
	)
}
