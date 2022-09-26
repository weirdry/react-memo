import { ReactNode } from 'react'

import { ToolBarContainer } from './tool-bar.styles'

type ToolBarProps = {
	title?: string
	children?: ReactNode | undefined
}

export default function ToolBar(props: ToolBarProps) {
	const { title, children } = props

	return (
		<ToolBarContainer>
			<h1>{title}</h1>
			<div className="buttons-container">{children}</div>
		</ToolBarContainer>
	)
}

ToolBar.defaultProps = {
	title: 'Title',
}
