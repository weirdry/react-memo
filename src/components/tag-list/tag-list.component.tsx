import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '../../store/hooks'
import { Memo, selectMemoisedMemoList } from '../../store/memo/memoSlice'

import Chip from '../chip/chip.component'

import { TagListContainer } from './tag-list.styles'

type TagListProps = {
	memo?: Memo
	isEditable: boolean
}

export default function TagList(props: TagListProps) {
	const { memo, isEditable } = props

	const { tagList } = useAppSelector(selectMemoisedMemoList)

	const navigate = useNavigate()

	const handleViewTag = (e: MouseEvent<HTMLDivElement>): void =>
		navigate('/select-tag')

	return (
		<TagListContainer isEditable={isEditable}>
			{memo?.memoTag.length !== 0 &&
				memo?.memoTag.map((storedTagId) => {
					const tagToShow = tagList.find(
						(storedTag) => storedTag.id === storedTagId,
					)
					if (tagToShow) {
						return (
							<Chip
								key={tagToShow.id}
								chipSize="sm"
								chipType="checkbox"
								text={tagToShow.name}
								checked
								disabled
							/>
						)
					} else return null
				})}

			{isEditable && (
				<Chip
					chipSize="sm"
					chipType="button"
					symbol="+"
					text="태그 편집"
					handleClick={handleViewTag}
				/>
			)}
		</TagListContainer>
	)
}

TagList.defaultProps = {
	isEditable: false,
}
