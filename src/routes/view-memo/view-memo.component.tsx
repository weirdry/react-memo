import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import MemoDetails from '../../components/memo-details/memo-details.component'

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
				rightSideChildren={<IconButton icon="more" />}
			/>

			<div className="body-container">
				<MemoDetails />
			</div>
		</ViewMemoContainer>
	)
}
