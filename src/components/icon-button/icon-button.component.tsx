import getIcon, { IconType } from '../../assets/icons/iconSelector'

import { IconButtonContainer } from './icon-button.styles'

type IconButtonProps = { icon: IconType }

export default function IconButton({ icon }: IconButtonProps) {
	const ButtonIcon = getIcon(icon)

	return (
		<IconButtonContainer>
			<ButtonIcon />
		</IconButtonContainer>
	)
}

IconButton.defaultProps = {
	icon: IconType.default,
}
