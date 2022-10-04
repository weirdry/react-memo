import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { RootState, AppDispatch, GetAppState } from '../store'

export type Memo = {
	id: string
	title: string
	body: string
	createdAt: string
	isPinned: boolean
}

export type MemoState = {
	isCreated: boolean
	isEdited: boolean
	memo: Memo
	memoList: Memo[]
}

const initialState: MemoState = {
	isCreated: false,
	isEdited: false,
	memo: { id: '', title: '', body: '', createdAt: '', isPinned: false },
	memoList: [],
}

export const memoSlice = createSlice({
	name: 'memo',
	initialState,
	reducers: {
		setIsCreated: (state, action: PayloadAction<boolean>) => {
			state.isCreated = action.payload
		},
		resetIsCreated: (state) => {
			state.isCreated = initialState.isCreated
		},
		setIsEdited: (state, action: PayloadAction<boolean>) => {
			state.isEdited = action.payload
		},
		resetIsEdited: (state) => {
			state.isEdited = initialState.isEdited
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
export const selectIsCreated = (state: RootState) => state.memo.isCreated
export const selectIsEdited = (state: RootState) => state.memo.isEdited
export const selectMemo = (state: RootState) => state.memo.memo
export const selectMemoList = (state: RootState) => state.memo.memoList
export const selectUnpinnedMemoList = (state: RootState) =>
	state.memo.memoList.filter((memo) => !memo.isPinned)
export const selectPinnedMemoList = (state: RootState) =>
	state.memo.memoList.filter((memo) => memo.isPinned)

// State memoisation
export const selectMemoisedMemoList = createSelector(
	selectIsCreated,
	selectIsEdited,
	selectMemo,
	selectMemoList,
	selectUnpinnedMemoList,
	selectPinnedMemoList,
	(isCreated, isEdited, memo, memoList, unpinnedMemoList, pinnedMemoList) => ({
		isCreated,
		isEdited,
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
	setIsEdited,
	resetIsEdited,
	setIsCreated,
	resetIsCreated,
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

export const editMemoPin = (
	dispatch: AppDispatch,
	getState: GetAppState,
): void => {
	const { memo } = selectMemoisedMemoList(getState())
	dispatch(setMemo({ ...memo, isPinned: !memo.isPinned }))
}

export default memoSlice.reducer
