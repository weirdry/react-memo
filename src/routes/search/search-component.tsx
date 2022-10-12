import { MouseEvent, FormEvent, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import {
	selectMemoisedMemoList,
	setSearchKeyword,
	resetSearchKeyword,
} from '../../store/memo/memoSlice'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import InputSearch from '../../components/input-search/input-search.component'
import SearchResults from '../../components/search-results/search-results.component'

import { SearchContainer } from './search-styles'

export default function Search() {
	const { searchKeyword } = useAppSelector(selectMemoisedMemoList)

	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const handleBackwards = (e: MouseEvent<HTMLButtonElement>): void => {
		handleClear(e)
		navigate('/')
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void =>
		e.preventDefault()

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		dispatch(setSearchKeyword(e.target.value))
	}

	const handleClear = (e: MouseEvent<HTMLButtonElement>): void => {
		dispatch(resetSearchKeyword())
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
					<InputSearch
						value={searchKeyword}
						autoFocus
						handleChange={handleChange}
						handleClear={handleClear}
					/>
				</div>

				<SearchResults />
			</div>
		</SearchContainer>
	)
}
