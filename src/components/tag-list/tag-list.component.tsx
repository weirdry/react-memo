import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { Memo } from '../../store/memo/memoSlice'

import Chip from '../chip/chip.component'

import { TagListContainer } from './tag-list.styles'

type TagListProps = {
	memo?: Memo
}

export default function TagList(props: TagListProps) {
	const { memo } = props

	const navigate = useNavigate()

	const handleViewTag = (e: MouseEvent<HTMLButtonElement>): void =>
		navigate('/select-tag')

	return (
		<TagListContainer>
			{memo?.memoTag.length !== 0 &&
				memo?.memoTag.map((storedTag, index) => (
					<Chip key={index} size="sm" text={storedTag.name} isSelected />
				))}

			<Chip
				size="sm"
				chipType="new"
				text="태그 등록"
				handleClick={handleViewTag}
			/>
		</TagListContainer>
	)
}
