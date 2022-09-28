import { ReactNode } from 'react'

import { ToolBarContainer } from './tool-bar.styles'

type ToolBarProps = {
	isLeftSideOn: boolean
	isRightSideOn: boolean
	title?: string
	leftSideChildren?: ReactNode | null
	rightSideChildren?: ReactNode | null
}

export default function ToolBar(props: ToolBarProps) {
	const {
		isLeftSideOn,
		isRightSideOn,
		title,
		leftSideChildren,
		rightSideChildren,
	} = props

	return (
		<ToolBarContainer>
			<div className="buttons-container">
				{isLeftSideOn ? leftSideChildren : <h1>{title}</h1>}
			</div>
			<div className="buttons-container">
				{isRightSideOn && rightSideChildren}
			</div>
		</ToolBarContainer>
	)
}

ToolBar.defaultProps = {
	isLeftSideOn: false,
	isRightSideOn: true,
	title: 'Title',
}
