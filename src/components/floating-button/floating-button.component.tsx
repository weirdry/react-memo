import { MouseEvent } from 'react'

import selectIcon, { IconType } from '../../assets/icons/iconSelector'

import { FloatingButtonContainer } from './floating-button.styles'

type FloatingButtonProps = {
	icon: IconType
	text: string
	handleClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function FloatingButton(props: FloatingButtonProps) {
	const { icon, text, handleClick } = props

	const SelectedIcon = selectIcon(icon)

	return (
		<FloatingButtonContainer onClick={handleClick}>
			<SelectedIcon />
			<span>{text}</span>
		</FloatingButtonContainer>
	)
}

FloatingButton.defaultProps = {
	icon: 'default',
	text: '텍스트',
	handleClick: () => console.log('Floating Button Clicked'),
}
