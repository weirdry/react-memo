import { MouseEvent } from 'react'

import selecIcon, { IconType } from '../../assets/icons/iconSelector'

import { IconButtonContainer } from './icon-button.styles'

type IconButtonProps = {
	icon: IconType
	handleClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function IconButton(props: IconButtonProps) {
	const { icon, handleClick } = props

	const ButtonIcon = selecIcon(icon)

	return (
		<IconButtonContainer onClick={handleClick}>
			<ButtonIcon />
		</IconButtonContainer>
	)
}

IconButton.defaultProps = {
	icon: 'default',
	handleClick: () => console.log('Button Clicked'),
}
