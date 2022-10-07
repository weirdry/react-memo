import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { RootState, AppDispatch, GetAppState } from '../store'

export type Memo = {
	id: string
	title: string
	body: string
	createdAt: string
	isPinned: boolean
	memoTag: Tag | null
}

export type Tag = {
	name: string
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
}

export const initialState: MemoState = {
	isModified: { modifiactionType: null, modificationState: 'none' },
	memo: {
		id: '',
		title: '',
		body: '',
		createdAt: '',
		isPinned: false,
		memoTag: null,
	},
	memoList: [],
	tag: { name: '' },
	tagList: [],
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
	},
	extraReducers: (builder) => {},
})

// Select MemoList directly from state
export const selectIsModified = (state: RootState) => state.memo.isModified
export const selectMemo = (state: RootState) => state.memo.memo
export const selectMemoList = (state: RootState) => state.memo.memoList
export const selectUnpinnedMemoList = (state: RootState) =>
	state.memo.memoList.filter((memo) => !memo.isPinned)
export const selectPinnedMemoList = (state: RootState) =>
	state.memo.memoList.filter((memo) => memo.isPinned)
export const selectTag = (state: RootState) => state.memo.tag
export const selectTagList = (state: RootState) => state.memo.tagList

// State memoisation
export const selectMemoisedMemoList = createSelector(
	selectIsModified,
	selectMemo,
	selectMemoList,
	selectUnpinnedMemoList,
	selectPinnedMemoList,
	selectTag,
	selectTagList,
	(
		isModified,
		memo,
		memoList,
		unpinnedMemoList,
		pinnedMemoList,
		tag,
		tagList,
	) => ({
		isModified,
		memo,
		memoList,
		unpinnedMemoList,
		pinnedMemoList,
		tag,
		tagList,
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

	dispatch(setMemoList(newMemoList))
}

export const addTag = (dispatch: AppDispatch, getState: GetAppState) => {
	const { tag, tagList } = selectMemoisedMemoList(getState())
	const newTagList = [...tagList, tag]

	dispatch(setTagList(newTagList))
}

export default memoSlice.reducer
