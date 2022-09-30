import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { RootState, AppDispatch, GetAppState } from '../store'

export type Memo = {
	id: string
	title: string
	body: string
	createdAt: string
}

export type MemoState = {
	memoList: Memo[]
}

const initialState: MemoState = {
	memoList: [],
}

export const memoSlice = createSlice({
	name: 'memo',
	initialState,
	reducers: {
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
export const selectMemoList = (state: RootState) => state.memo.memoList

// State memoisation
export const selectMemo = createSelector(selectMemoList, (memoList) => ({
	memoList,
}))

// Export actions
export const { setMemoList, resetMemoList } = memoSlice.actions

export const addMemo =
	(memoToAdd: Memo) =>
	(dispatch: AppDispatch, getState: GetAppState): void => {
		const memoList = selectMemoList(getState())
		const memoId = uuidv4()

		const newMemoList = [...memoList, { ...memoToAdd, id: memoId }]
		dispatch(setMemoList(newMemoList))
	}

export default memoSlice.reducer
