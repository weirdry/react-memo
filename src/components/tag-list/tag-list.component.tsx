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

	const handleViewTag = (e: MouseEvent<HTMLDivElement>): void =>
		navigate('/select-tag')

	return (
		<TagListContainer>
			{memo?.memoTag.length !== 0 &&
				memo?.memoTag.map((storedTag, index) => (
					<Chip
						key={index}
						chipSize="sm"
						chipType="checkbox"
						text={storedTag.name}
						checked
						disabled
					/>
				))}

			<Chip
				chipSize="sm"
				chipType="button"
				symbol="+"
				text="태그 편집"
				handleClick={handleViewTag}
			/>
		</TagListContainer>
	)
}
