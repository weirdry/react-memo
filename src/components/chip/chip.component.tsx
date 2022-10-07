import { MouseEvent } from 'react'

import selectIcon from '../../assets/icons/iconSelector'

import { ChipContainer, ChipMd, ChipSm } from './chip.styles'

type ChipSize = 'md' | 'sm'

type ChipProps = {
	text: string
	count?: number
	isSelected: boolean
	chipType: 'tag' | 'all' | 'new'
	size: ChipSize
	handleClick?: (e: MouseEvent<HTMLButtonElement>) => void
	deletable: boolean
}

const selectChip = (size: ChipSize): typeof ChipContainer => {
	switch (size) {
		case 'md':
			return ChipMd
		case 'sm':
			return ChipSm
	}
}

export default function Chip(props: ChipProps) {
	const { text, count, isSelected, chipType, size, handleClick, deletable } =
		props

	const SelectedChip = selectChip(size)
	const CloseIcon = selectIcon('close')

	switch (chipType) {
		case 'tag':
			return (
				<SelectedChip isSelected={isSelected} onClick={handleClick}>
					<div className="texts-container">
						<span className="symbol">#</span> {text}
					</div>
					{size === 'md' && <span className="count">{count}</span>}
					{deletable && (
						<div className="icon-container">
							<CloseIcon />
						</div>
					)}
				</SelectedChip>
			)
		case 'all':
			return (
				<SelectedChip isSelected={isSelected} onClick={handleClick}>
					<div className="texts-container">전체</div>
					{size === 'md' && <span className="count">{count}</span>}
					{deletable && (
						<div className="icon-container">
							<CloseIcon />
						</div>
					)}
				</SelectedChip>
			)
		case 'new':
			return (
				<SelectedChip isSelected={false} onClick={handleClick}>
					<div className="texts-container">
						<span className="symbol">
							<b>+</b>
						</span>{' '}
						새 태그
					</div>
				</SelectedChip>
			)
	}
}

Chip.defaultProps = {
	text: '태그 이름',
	count: 0,
	isSelected: false,
	chipType: 'tag',
	size: 'md',
	deletable: false,
}
