import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import Card from '../../components/card/card.component'

import { ViewMemoContainer } from './view-memo.styles'

export default function ViewMemo() {
	const navigate = useNavigate()

	const handleBackwards = (e: MouseEvent<HTMLButtonElement>) => navigate('/')

	return (
		<ViewMemoContainer>
			<ToolBar
				isLeftSideOn
				leftSideChildren={
					<IconButton icon="close" handleClick={handleBackwards} />
				}
				// rightSideChildren={<IconButton icon="confirm" type="submit" />}
			/>

			<div className="body-container">
				<Card cardType="detailed">
					<div className="inputs-container"></div>
				</Card>
			</div>
		</ViewMemoContainer>
	)
}
