import { useState, useEffect, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import {
	selectMemoisedMemoList,
	setSelectedTag,
	Tag,
	Memo,
} from '../../store/memo/memoSlice'

import Chip from '../chip/chip.component'
import MemoList from '../memo-list/memo-list.component'

import { SearchResultsContainer } from './search-results.styles'

type SearchResult = {
	tag: Tag[]
	memo: Memo[]
}

const initialState = {
	tag: [],
	memo: [],
}

export default function SearchResults() {
	const [searchResult, setSearchResult] = useState<SearchResult>(initialState)

	const { searchKeyword, tagList, memoList } = useAppSelector(
		selectMemoisedMemoList,
	)

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleSelectTag =
		(storedTag: Tag) =>
		(e: MouseEvent<HTMLDivElement>): void => {
			dispatch(setSelectedTag(storedTag))
			navigate('/')
		}

	useEffect(() => {
		if (searchKeyword !== '') {
			const newTagSearchResult = tagList.filter(
				(storedTag) => storedTag.name.includes(searchKeyword) && storedTag,
			)
			const newMemoSearchResult = memoList.filter((storedMemo) => {
				const tagToSearch = tagList.find(
					(storedTag) => storedTag.name.includes(searchKeyword) && storedTag,
				)

				return (
					(storedMemo.title.includes(searchKeyword) ||
						storedMemo.body.includes(searchKeyword) ||
						storedMemo.memoTag.find(
							(storedTag) => storedTag === tagToSearch?.id,
						)) &&
					storedMemo
				)
			})
			setSearchResult({ tag: newTagSearchResult, memo: newMemoSearchResult })
		}
	}, [searchKeyword, tagList, memoList])

	return (
		<SearchResultsContainer>
			{searchKeyword !== '' && searchResult.tag.length !== 0 && (
				<div className="tag-result-container">
					<h1>태그 검색 결과</h1>
					<div className="tag-list">
						{searchResult.tag.map((storedTag) => (
							<Chip
								key={storedTag.id}
								chipType="button"
								text={storedTag.name}
								count={storedTag.count}
								handleClick={handleSelectTag(storedTag)}
							/>
						))}
					</div>
				</div>
			)}

			{searchKeyword !== '' && searchResult.memo.length !== 0 && (
				<MemoList title="메모 검색 결과" memoList={searchResult.memo} />
			)}
		</SearchResultsContainer>
	)
}
