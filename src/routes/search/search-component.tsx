import { MouseEvent, FormEvent, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import InputSearch from '../../components/input-search/input-search.component'

import { SearchContainer } from './search-styles'

export default function Search() {
	const navigate = useNavigate()

	const handleBackwards = (e: MouseEvent<HTMLButtonElement>): void => {
		navigate('/')
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		console.log('h')
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		console.log(e.target.value)
	}

	return (
		<SearchContainer onSubmit={handleSubmit}>
			<ToolBar
				isLeftSideOn
				leftSideChildren={
					<IconButton icon="close" handleClick={handleBackwards} />
				}
			/>
			<div className="body-container">
				<div className="input-container">
					<InputSearch autoFocus handleChange={handleChange} />
				</div>
			</div>
		</SearchContainer>
	)
}
