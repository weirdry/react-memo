import { MouseEvent, ElementType, ChangeEvent } from 'react'

import selectIcon from '../../assets/icons/iconSelector'

import { ChipMd, ChipSm, ContentsContainer } from './chip.styles'

type ChipSize = 'md' | 'sm'
type ChipType = 'checkbox' | 'radio' | 'button'

type ChipProps = {
	isDefault: boolean
	chipSize: ChipSize
	chipType: ChipType
	symbol: string
	text: string
	count?: number
	checked?: boolean
	disabled?: boolean
	deletable: boolean
	handleClick?: (e: MouseEvent<HTMLDivElement>) => void
	handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const selectChipSize = (chipSize: ChipSize): ElementType => {
	switch (chipSize) {
		case 'md':
			return ChipMd
		case 'sm':
			return ChipSm
	}
}

export default function Chip(props: ChipProps) {
	const {
		isDefault,
		chipSize,
		chipType,
		symbol,
		text,
		count,
		checked,
		disabled,
		deletable,
		handleClick,
		handleChange,
	} = props

	const SelectedChip = selectChipSize(chipSize)
	const CloseIcon = selectIcon('close')

	return (
		<SelectedChip>
			{chipType !== 'button' && (
				<input
					type={chipType}
					defaultChecked={checked}
					name="tag"
					value={isDefault ? '' : text}
					onChange={handleChange}
					disabled={disabled}
				/>
			)}
			<ContentsContainer
				onClick={
					chipType === 'button' && handleClick !== undefined
						? handleClick
						: undefined
				}
			>
				<div className="texts-container">
					{!isDefault && <span className="symbol">{symbol}</span>}
					<span className="text">{text}</span>
				</div>

				{count !== undefined && <span className="count">{count}</span>}
				{deletable && (
					<div className="icon-container">
						<CloseIcon />
					</div>
				)}
			</ContentsContainer>
		</SelectedChip>
	)
}

Chip.defaultProps = {
	isDefault: false,
	chipSize: 'md',
	chipType: 'checkbox',
	symbol: '#',
	text: '태그 이름',
	deletable: false,
}
