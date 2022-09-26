import { ReactNode } from 'react'

import { ReactComponent as DefaultIcon } from '../../assets/icons/Icon-default.svg'

import { IconButtonContainer } from './icon-button.styles'

type IconButtonProps = { icon: ReactNode | undefined }

export default function IconButton({ icon }: IconButtonProps) {
	return <IconButtonContainer>{icon}</IconButtonContainer>
}

IconButton.defaultProps = {
	icon: <DefaultIcon />,
}
