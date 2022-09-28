import { MouseEvent } from 'react'

import selectIcon, { IconType } from '../../assets/icons/iconSelector'

import {
	IconButtonContainer,
	IconButtonContainerMD,
	IconButtonContainerSM,
} from './icon-button.styles'

type IconButtonProps = {
	type: 'button' | 'submit' | 'reset'
	size: 'md' | 'sm'
	icon: IconType
	handleClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const selectIconButtonSize = (
	size: 'md' | 'sm',
): typeof IconButtonContainer => {
	switch (size) {
		case 'md':
			return IconButtonContainerMD
		case 'sm':
			return IconButtonContainerSM
		default:
			return IconButtonContainerMD
	}
}

export default function IconButton(props: IconButtonProps) {
	const { type, size, icon, handleClick } = props

	const ButtonIcon = selectIcon(icon)
	const SelectedIconButton = selectIconButtonSize(size)

	return (
		<SelectedIconButton onClick={handleClick} type={type}>
			<ButtonIcon />
		</SelectedIconButton>
	)
}

IconButton.defaultProps = {
	type: 'button',
	size: 'md',
	icon: 'default',
	handleClick: () => console.log('Icon Button Clicked'),
}
