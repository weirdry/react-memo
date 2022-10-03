import { MouseEvent } from 'react'

import selectIcon, { IconType } from '../../assets/icons/iconSelector'
import Toggle from '../toggle/toggle.component'

import { OverlayItemContainer } from './overlay-item.styles'

type OverlayItemProps = {
	icon: IconType
	text: string
	isSystem: boolean
	isToggle: boolean
	isActivated: boolean
	handleClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function OverlayItem(props: OverlayItemProps) {
	const { icon, text, isSystem, isToggle, isActivated, handleClick } = props

	const SelectedIcon = selectIcon(icon)

	return (
		<OverlayItemContainer isSystem={isSystem} onClick={handleClick}>
			{icon && (
				<div className="icon-container">
					<SelectedIcon />
				</div>
			)}
			<span>{text}</span>
			{isToggle && <Toggle isActivated={isActivated} />}
		</OverlayItemContainer>
	)
}

OverlayItem.defaultProps = {
	icon: 'default',
	text: '오버레이 아이템',
	isSystem: false,
	isToggle: false,
	isActivated: false,
}
