import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { selectMemoisedMemoList, resetTag } from '../../store/memo/memoSlice'

import IconButton from '../icon-button/icon-button.component'
import Chip from '../chip/chip.component'

import { TagBarContainer } from './tag-bar.styles'

export default function TagBar() {
	const { memoList, tagList } = useAppSelector(selectMemoisedMemoList)

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleViewTag = (e: MouseEvent<HTMLButtonElement>): void =>
		navigate('/view-tag')

	const handleCreateTag = (e: MouseEvent<HTMLDivElement>): void => {
		dispatch(resetTag())
		navigate('/create-tag')
	}

	return (
		<TagBarContainer>
			<IconButton
				isInverted
				icon="menu"
				size="sm"
				handleClick={handleViewTag}
			/>
			<Chip
				chipType="radio"
				text="전체"
				count={memoList.length}
				checked
				isDefault
			/>

			{tagList.length !== 0 &&
				tagList.map((storedTag, index) => (
					<Chip key={index} chipType="radio" text={storedTag.name} count={0} />
				))}

			<Chip
				chipType="button"
				symbol="+"
				text="새 태그"
				handleClick={handleCreateTag}
			/>
		</TagBarContainer>
	)
}
