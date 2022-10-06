import { MouseEvent } from 'react'

import { OverlayInputContainer } from './overlay-input.styles'

type OverlayInputProps = {
	handleConfirm: (e: MouseEvent<HTMLButtonElement>) => void
	handleCancel: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function OverlayInput(props: OverlayInputProps) {
	const { handleConfirm, handleCancel } = props

	return (
		<OverlayInputContainer>
			<div className="input-container">
				<span className="symbol">#</span>
			</div>
			<div className="buttons-container"></div>
		</OverlayInputContainer>
	)
}

OverlayInput.defaultProps = {
	handleConfirm: () => {},
	handleCancel: () => {},
}
