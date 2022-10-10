import { useState, ChangeEvent, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import {
	selectMemoisedMemoList,
	resetTag,
	setSelectedTag,
	setTag,
	initialState,
} from '../../store/memo/memoSlice'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import Chip from '../../components/chip/chip.component'

import { ViewTagContainer } from './view-tag.styles'

export default function ViewTag() {
	const [isEditable, setIsEditable] = useState<boolean>(false)

	const { memoList, tagList, selectedTag } = useAppSelector(
		selectMemoisedMemoList,
	)

	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const handleBackwards = (e: MouseEvent<HTMLButtonElement>): void =>
		navigate(-1)

	const handleEdit = (e: MouseEvent<HTMLButtonElement>): void =>
		setIsEditable(!isEditable)

	const handleSelectTag = (e: ChangeEvent<HTMLInputElement>) => {
		const newSelectedTag = tagList.find(
			(storedTag) => storedTag.name === e.target.value,
		)

		if (newSelectedTag) {
			dispatch(setSelectedTag(newSelectedTag))
		} else {
			dispatch(setSelectedTag(initialState.selectedTag))
		}

		navigate('/')
	}

	const handleEditTag = (e: ChangeEvent<HTMLInputElement>): void => {
		const tagToEdit = tagList.find(
			(storedTag) => storedTag.name === e.target.value,
		)

		dispatch(setTag(tagToEdit!))

		navigate('/create-tag')
		setIsEditable(false)
	}

	const handleCreateTag = (e: MouseEvent<HTMLDivElement>): void => {
		dispatch(resetTag())
		navigate('/create-tag')
	}

	return (
		<ViewTagContainer isEditable={isEditable}>
			<ToolBar
				isLeftSideOn
				leftSideChildren={
					<IconButton icon="close" handleClick={handleBackwards} />
				}
				rightSideChildren={
					<IconButton
						icon="setting"
						handleClick={handleEdit}
						disabled={tagList.length === 0}
					/>
				}
			/>

			<div className="body-container">
				<h2>{!isEditable ? '태그 리스트' : '수정할 태그를 선택해 주세요.'}</h2>

				<div className="tags-container">
					{!isEditable && (
						<Chip
							text="전체"
							count={memoList.length}
							isDefault
							handleChange={handleSelectTag}
							checked={selectedTag.name === ''}
						/>
					)}
					{tagList.map((storedTag, index) => (
						<Chip
							key={index}
							text={storedTag.name}
							count={storedTag.count}
							handleChange={isEditable ? handleEditTag : handleSelectTag}
							checked={storedTag.id === selectedTag.id}
							isEditable={isEditable}
						/>
					))}
					{!isEditable && (
						<Chip
							chipType="button"
							symbol="+"
							text="새 태그"
							handleClick={handleCreateTag}
						/>
					)}
				</div>
			</div>
		</ViewTagContainer>
	)
}
