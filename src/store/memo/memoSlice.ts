import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { RootState, AppDispatch, GetAppState } from '../store'

export type Memo = {
	id: string
	title: string
	body: string
	createdAt: string
	isPinned: boolean
	memoTag: Tag['id'][]
}

export type Tag = {
	id: string
	name: string
	count: number
}

export type ModificationType = 'none' | 'created' | 'edited' | 'deleted'

export type ModificationList = {
	modifiactionType: 'memo' | 'tag' | null
	modificationState: ModificationType
}

export type MemoState = {
	isModified: ModificationList
	memo: Memo
	memoList: Memo[]
	tag: Tag
	tagList: Tag[]
	selectedTag: Tag
	searchKeyword: string
}

export const initialState: MemoState = {
	isModified: { modifiactionType: null, modificationState: 'none' },
	memo: {
		id: '',
		title: '',
		body: '',
		createdAt: new Date().toLocaleDateString('ko-KR', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		}),
		isPinned: false,
		memoTag: [],
	},
	memoList: [],
	tag: { id: '', name: '', count: 0 },
	tagList: [],
	selectedTag: { id: '', name: '', count: 0 },
	searchKeyword: '',
}

export const memoSlice = createSlice({
	name: 'memo',
	initialState,
	reducers: {
		setIsModified: (state, action: PayloadAction<ModificationList>) => {
			state.isModified = action.payload
		},
		resetIsModified: (state) => {
			state.isModified = initialState.isModified
		},
		setMemo: (state, action: PayloadAction<Memo>) => {
			state.memo = action.payload
		},
		resetMemo: (state) => {
			state.memo = initialState.memo
		},
		setMemoList: (state, action: PayloadAction<Memo[]>) => {
			state.memoList = action.payload
		},
		resetMemoList: (state) => {
			state.memoList = initialState.memoList
		},
		setTag: (state, action: PayloadAction<Tag>) => {
			state.tag = action.payload
		},
		resetTag: (state) => {
			state.tag = initialState.tag
		},
		setTagList: (state, action: PayloadAction<Tag[]>) => {
			state.tagList = action.payload
		},
		resetTagList: (state) => {
			state.tagList = initialState.tagList
		},
		setSelectedTag: (state, action: PayloadAction<Tag>) => {
			state.selectedTag = action.payload
		},
		resetSelectedTag: (state) => {
			state.selectedTag = initialState.selectedTag
		},
		setSearchKeyword: (state, action: PayloadAction<string>) => {
			state.searchKeyword = action.payload
		},
		resetSearchKeyword: (state) => {
			state.searchKeyword = initialState.searchKeyword
		},
	},
	extraReducers: (builder) => {},
})

// Select MemoList directly from state
export const selectIsModified = (state: RootState) => state.memo.isModified
export const selectMemo = (state: RootState) => state.memo.memo
export const selectMemoList = (state: RootState) => state.memo.memoList
export const selectUnpinnedMemoList = (state: RootState) => {
	const unpinnedMemoList = state.memo.memoList.filter((memo) => !memo.isPinned)
	return state.memo.selectedTag.id === ''
		? unpinnedMemoList
		: unpinnedMemoList.filter((memo) =>
				memo.memoTag.includes(state.memo.selectedTag.id),
		  )
}
export const selectPinnedMemoList = (state: RootState) => {
	const pinnedMemoList = state.memo.memoList.filter((memo) => memo.isPinned)
	return state.memo.selectedTag.id === ''
		? pinnedMemoList
		: pinnedMemoList.filter((memo) =>
				memo.memoTag.includes(state.memo.selectedTag.id),
		  )
}
export const selectTag = (state: RootState) => state.memo.tag
export const selectTagList = (state: RootState) => state.memo.tagList
export const selectSelectedTag = (state: RootState) => state.memo.selectedTag
export const selectSearchKeyword = (state: RootState) =>
	state.memo.searchKeyword

// State memoisation
export const selectMemoisedMemoList = createSelector(
	selectIsModified,
	selectMemo,
	selectMemoList,
	selectUnpinnedMemoList,
	selectPinnedMemoList,
	selectTag,
	selectTagList,
	selectSelectedTag,
	selectSearchKeyword,
	(
		isModified,
		memo,
		memoList,
		unpinnedMemoList,
		pinnedMemoList,
		tag,
		tagList,
		selectedTag,
		searchKeyword,
	) => ({
		isModified,
		memo,
		memoList,
		unpinnedMemoList,
		pinnedMemoList,
		tag,
		tagList,
		selectedTag,
		searchKeyword,
	}),
)

// Export actions
export const {
	setMemo,
	resetMemo,
	setIsModified,
	resetIsModified,
	setMemoList,
	resetMemoList,
	setTag,
	resetTag,
	setTagList,
	resetTagList,
	setSelectedTag,
	resetSelectedTag,
	setSearchKeyword,
	resetSearchKeyword,
} = memoSlice.actions

export const addMemo = (dispatch: AppDispatch, getState: GetAppState): void => {
	const { memo, memoList } = selectMemoisedMemoList(getState())
	const memoId = uuidv4()

	const newMemoList = [...memoList, { ...memo, id: memoId }]
	dispatch(setMemoList(newMemoList))
}

export const editMemo = (
	dispatch: AppDispatch,
	getState: GetAppState,
): void => {
	const { memo, memoList } = selectMemoisedMemoList(getState())

	const findIndex = memoList.findIndex(
		(storedMemo) => storedMemo.id === memo.id,
	)
	let copyList = [...memoList]

	if (findIndex !== -1) {
		copyList[findIndex] = {
			...copyList[findIndex],
			title: memo.title,
			body: memo.body,
			createdAt: memo.createdAt,
			isPinned: memo.isPinned,
			memoTag: memo.memoTag,
		}
	}
	dispatch(setMemoList(copyList))
}

export const editMemoPin =
	(isDirectlySave: boolean) =>
	(dispatch: AppDispatch, getState: GetAppState): void => {
		const { memo } = selectMemoisedMemoList(getState())
		dispatch(setMemo({ ...memo, isPinned: !memo.isPinned }))

		isDirectlySave && dispatch(editMemo)
	}

export const deleteMemo = (
	dispatch: AppDispatch,
	getState: GetAppState,
): void => {
	const { memo, memoList } = selectMemoisedMemoList(getState())

	const newMemoList = memoList.filter((storedMemo) => storedMemo.id !== memo.id)
	memo.memoTag.forEach((storedMemoTag) =>
		dispatch(calcTagCount(storedMemoTag, -1)),
	)

	dispatch(setMemoList(newMemoList))
}

export const addTag = (dispatch: AppDispatch, getState: GetAppState) => {
	const { tag, tagList } = selectMemoisedMemoList(getState())
	const tagId = uuidv4()
	const newTagList = [...tagList, { ...tag, id: tagId }]

	dispatch(setTagList(newTagList))
}

export const calcTagCount =
	(tagIdToCalc: Tag['id'], amount: number) =>
	(dispatch: AppDispatch, getState: GetAppState) => {
		const { tagList } = selectMemoisedMemoList(getState())

		const findIndex = tagList.findIndex(
			(storedTag) => storedTag.id === tagIdToCalc,
		)
		let copyList = [...tagList]

		if (findIndex !== -1) {
			copyList[findIndex] = {
				...copyList[findIndex],
				count: copyList[findIndex].count + amount,
			}
		}
		dispatch(setTagList(copyList))
	}

export const addTagToMemo =
	(tagIdToAdd: string) => (dispatch: AppDispatch, getState: GetAppState) => {
		const { memo } = selectMemoisedMemoList(getState())

		if (memo.memoTag.find((storedTagId) => storedTagId === tagIdToAdd)) return

		const newMemoTag = [...memo.memoTag, tagIdToAdd]

		dispatch(setMemo({ ...memo, memoTag: newMemoTag }))
		dispatch(calcTagCount(tagIdToAdd, +1))
	}

export const removeTagFromMemo =
	(tagIdToRemove: string) => (dispatch: AppDispatch, getState: GetAppState) => {
		const { memo } = selectMemoisedMemoList(getState())
		const newMemoTag = memo.memoTag.filter(
			(storedTagId) => storedTagId !== tagIdToRemove,
		)

		dispatch(setMemo({ ...memo, memoTag: newMemoTag }))
		dispatch(calcTagCount(tagIdToRemove, -1))
	}

export const editTag = (dispatch: AppDispatch, getState: GetAppState): void => {
	const { tag, tagList } = selectMemoisedMemoList(getState())

	const findIndex = tagList.findIndex((storedTag) => storedTag.id === tag.id)
	let copyList = [...tagList]

	if (findIndex !== -1) {
		copyList[findIndex] = {
			...copyList[findIndex],
			name: tag.name,
		}
	}
	dispatch(setTagList(copyList))
}

export const deleteTag = (dispatch: AppDispatch, getState: GetAppState) => {
	const { tag, memoList, tagList } = selectMemoisedMemoList(getState())

	const newMemoList = memoList.map((storedMemo) => {
		const newMemoTag = storedMemo.memoTag.filter(
			(storedTag) => storedTag !== tag.id,
		)
		return { ...storedMemo, memoTag: newMemoTag as Tag['id'][] }
	})
	const newTagList = tagList.filter((storedTag) => storedTag.id !== tag.id)

	dispatch(setTagList(newTagList))
	dispatch(resetTag())
	dispatch(setMemoList(newMemoList))
}

export default memoSlice.reducer
