import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { Memo } from '../../store/memo/memoSlice'

import Chip from '../chip/chip.component'

import { TagListContainer } from './tag-list.styles'

type TagListProps = {
	memo?: Memo
	isEditable: boolean
}

export default function TagList(props: TagListProps) {
	const { memo, isEditable } = props

	const navigate = useNavigate()

	const handleViewTag = (e: MouseEvent<HTMLDivElement>): void =>
		navigate('/select-tag')

	return (
		<TagListContainer isEditable={isEditable}>
			{memo?.memoTag.length !== 0 &&
				memo?.memoTag.map((storedTagName, index) => (
					<Chip
						key={index}
						chipSize="sm"
						chipType="checkbox"
						text={storedTagName}
						checked
						disabled
					/>
				))}

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
