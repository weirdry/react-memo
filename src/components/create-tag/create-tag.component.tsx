import { MouseEvent } from 'react'

import OverlayInput from '../overlay-input/overlay-input.component'
import BackgroundPanel from '../background-panel/background-panel.component'

import { CreateTagContainer } from './create-tag.styles'

type CreateTagProps = {
	handleClose?: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void
}

export default function CreateTag(props: CreateTagProps) {
	const { handleClose } = props

	return (
		<CreateTagContainer>
			<OverlayInput handleCancel={handleClose} />
			<BackgroundPanel handleClick={handleClose} />
		</CreateTagContainer>
	)
}
