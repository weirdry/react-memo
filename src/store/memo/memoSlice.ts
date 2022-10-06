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
	id: string
	title: string
}

export type ModificationType = 'none' | 'created' | 'edited' | 'deleted'

export type MemoState = {
	isModified: ModificationType
	memo: Memo
	memoList: Memo[]
	tag: Tag | null
	tagList: Tag[]
}

export const initialState: MemoState = {
	isModified: 'none',
	memo: {
		id: '',
		title: '',
		body: '',
		createdAt: '',
		isPinned: false,
		memoTag: null,
	},
	memoList: [],
	tag: null,
	tagList: [],
}

export const memoSlice = createSlice({
	name: 'memo',
	initialState,
	reducers: {
		setIsModified: (state, action: PayloadAction<ModificationType>) => {
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

// State memoisation
export const selectMemoisedMemoList = createSelector(
	selectIsModified,
	selectMemo,
	selectMemoList,
	selectUnpinnedMemoList,
	selectPinnedMemoList,
	(isModified, memo, memoList, unpinnedMemoList, pinnedMemoList) => ({
		isModified,
		memo,
		memoList,
		unpinnedMemoList,
		pinnedMemoList,
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

export default memoSlice.reducer
