import { MouseEvent } from 'react'

import selectIcon, { IconType } from '../../assets/icons/iconSelector'

import {
	IconButtonContainer,
	IconButtonContainerMD,
	IconButtonContainerSM,
} from './icon-button.styles'

type IconButtonProps = {
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
	const { size, icon, handleClick } = props

	const ButtonIcon = selectIcon(icon)
	const SelectedIconButton = selectIconButtonSize(size)

	return (
		<SelectedIconButton onClick={handleClick}>
			<ButtonIcon />
		</SelectedIconButton>
	)
}

IconButton.defaultProps = {
	size: 'md',
	icon: 'default',
	handleClick: () => console.log('Icon Button Clicked'),
}
