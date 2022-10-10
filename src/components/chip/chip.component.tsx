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
	disabled: boolean
	isEditable: boolean
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

const Chip = (props: ChipProps) => {
	const {
		isDefault,
		chipSize,
		chipType,
		symbol,
		text,
		count,
		checked,
		disabled,
		isEditable,
		handleClick,
		handleChange,
	} = props

	const SelectedChip = selectChipSize(chipSize)
	const CloseIcon = selectIcon('edit')

	return (
		<SelectedChip disabled={disabled}>
			<input
				type={chipType === 'button' ? '' : chipType}
				defaultChecked={checked}
				name="tag"
				defaultValue={isDefault ? '' : text}
				onChange={handleChange}
				disabled={disabled}
			/>

			<ContentsContainer
				onClick={
					(chipType === 'button' || isEditable) && handleClick !== undefined
						? handleClick
						: undefined
				}
			>
				<div className="texts-container">
					{!isDefault && <span className="symbol">{symbol}</span>}
					<span className="text">{text}</span>
				</div>

				{!isEditable && <span className="count">{count}</span>}
				{isEditable && (
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
	disabled: false,
	isEditable: false,
}

export default Chip
