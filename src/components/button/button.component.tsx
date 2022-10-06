import { MouseEvent } from 'react'

import {
	ButtonContainer,
	PrimaryButton,
	SecondaryButton,
	SystemButton,
} from './button.styles'

export type Hierarchy = 'primary' | 'secondary' | 'system'

type ButtonProps = {
	hierarchy: Hierarchy
	text: string
	handleClick: (e: MouseEvent<HTMLButtonElement>) => void
	disabled: boolean
}

const selectButton = (hierarchy: Hierarchy): typeof ButtonContainer => {
	switch (hierarchy) {
		case 'primary':
			return PrimaryButton
		case 'secondary':
			return SecondaryButton
		case 'system':
			return SystemButton
		default:
			return PrimaryButton
	}
}

export default function Button(props: ButtonProps) {
	const { hierarchy, text, handleClick, disabled } = props

	const SelectedButton = selectButton(hierarchy)

	return (
		<SelectedButton onClick={handleClick} disabled={disabled}>
			{text}
		</SelectedButton>
	)
}

Button.defaultProps = {
	hierarchy: 'primary',
	text: '버튼 텍스트',
	disabled: false,
	handleClick: () => console.log('Button Clicked'),
}
