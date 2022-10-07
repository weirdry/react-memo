import { MouseEvent, FormEvent } from 'react'

import { useNavigate } from 'react-router-dom'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import Chip from '../../components/chip/chip.component'

import { SelectTagContainer } from './select-tag.styles'

export default function SelectTag() {
	const navigate = useNavigate()

	const handleBackwards = (e: MouseEvent<HTMLButtonElement>) => navigate(-1)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<SelectTagContainer onSubmit={handleSubmit}>
			<ToolBar
				isLeftSideOn
				leftSideChildren={
					<IconButton icon="backwards" handleClick={handleBackwards} />
				}
				rightSideChildren={<IconButton icon="confirm" type="submit" />}
			/>
			<div className="body-container">
				<h2>등록할 태그를 선택해 주세요.</h2>

				<div className="tags-container">
					<Chip />
					<Chip />
					<Chip />
					<Chip />
					<Chip />
				</div>
			</div>
		</SelectTagContainer>
	)
}
