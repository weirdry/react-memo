import { useState, MouseEvent } from 'react'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { selectMemoisedMemoList, addTag } from '../../store/memo/memoSlice'

import IconButton from '../icon-button/icon-button.component'
import Chip from '../chip/chip.component'
import CreateTag from '../create-tag/create-tag.component'

import { TagBarContainer } from './tag-bar.styles'

export default function TagBar() {
	const [isCreateTagOpen, setIsCreateTagOpen] = useState<boolean>(false)

	const { tagList } = useAppSelector(selectMemoisedMemoList)

	const dispatch = useAppDispatch()

	const handleCreate = (e: MouseEvent<HTMLButtonElement>): void => {
		dispatch(addTag('추가된 태그'))
		setIsCreateTagOpen(false)
	}
	const handleCreateTagOpen = (
		e: MouseEvent<HTMLButtonElement | HTMLDivElement>,
	): void => setIsCreateTagOpen(!isCreateTagOpen)

	return (
		<>
			<TagBarContainer>
				<IconButton isInverted icon="menu" size="sm" />
				<Chip chipType="all" isSelected />

				{tagList.length !== 0 &&
					tagList.map((storedTag, index) => (
						<Chip key={index} chipType="tag" text={storedTag.name} />
					))}

				<Chip chipType="new" handleClick={handleCreateTagOpen} />
			</TagBarContainer>
			{isCreateTagOpen && (
				<CreateTag
					handleConfirm={handleCreate}
					handleClose={handleCreateTagOpen}
				/>
			)}
		</>
	)
}
