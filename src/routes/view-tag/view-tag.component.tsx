import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'

import { ViewTagContainer } from './view-tag.styles'

export default function ViewTag() {
	const navigate = useNavigate()

	const handleBackwards = (e: MouseEvent<HTMLButtonElement>) => navigate(-1)

	return (
		<ViewTagContainer>
			<ToolBar
				isLeftSideOn
				leftSideChildren={
					<IconButton icon="backwards" handleClick={handleBackwards} />
				}
				rightSideChildren={<IconButton icon="confirm" type="submit" />}
			/>
		</ViewTagContainer>
	)
}
