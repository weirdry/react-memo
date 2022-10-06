import { MouseEvent } from 'react'

import { BackgroundPannelContainer } from './background-panel.styles'

type BackgroundPanelProps = {
	handleClick?: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void
}

export default function BackgroundPanel(props: BackgroundPanelProps) {
	const { handleClick } = props

	return <BackgroundPannelContainer onClick={handleClick} />
}
