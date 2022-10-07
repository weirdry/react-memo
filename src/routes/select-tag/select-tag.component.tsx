import { MouseEvent } from 'react'

import { useNavigate } from 'react-router-dom'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'

import { SelectTagContainer } from './select-tag.styles'

export default function SelectTag() {
	const navigate = useNavigate()

	const handleBackwards = (e: MouseEvent<HTMLButtonElement>) => navigate(-1)

	return (
		<SelectTagContainer>
			<ToolBar
				isLeftSideOn
				leftSideChildren={
					<IconButton icon="backwards" handleClick={handleBackwards} />
				}
				rightSideChildren={<IconButton icon="confirm" type="submit" />}
			/>
			<div className="body-container">
				<h2>등록할 태그를 선택해 주세요.</h2>
			</div>
		</SelectTagContainer>
	)
}
