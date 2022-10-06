import { MouseEvent } from 'react'

import { ChipContainer } from './chip.styles'

type ChipProps = {
	text: string
	count: number
	isSelected: boolean
	chipType: 'tag' | 'all' | 'new'
	handleClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function Chip(props: ChipProps) {
	const { text, count, isSelected, chipType, handleClick } = props

	switch (chipType) {
		case 'tag':
			return (
				<ChipContainer isSelected={isSelected} onClick={handleClick}>
					<div className="texts-container">
						<span className="symbol">#</span> {text}
					</div>
					<span className="count">{count}</span>
				</ChipContainer>
			)
		case 'all':
			return (
				<ChipContainer isSelected={isSelected} onClick={handleClick}>
					<div className="texts-container">전체</div>
					<span className="count">{count}</span>
				</ChipContainer>
			)
		case 'new':
			return (
				<ChipContainer isSelected={false} onClick={handleClick}>
					<div className="texts-container">
						<span className="symbol">
							<b>+</b>
						</span>{' '}
						새 태그
					</div>
				</ChipContainer>
			)
	}
}

Chip.defaultProps = {
	text: '태그 이름',
	count: 0,
	isSelected: false,
	chipType: 'tag',
}
