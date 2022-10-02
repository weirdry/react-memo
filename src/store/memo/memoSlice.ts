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
	isCreated: boolean
	memoList: Memo[]
}

const initialState: MemoState = {
	isCreated: false,
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
export const selecIsCreated = (state: RootState) => state.memo.isCreated
export const selectMemoList = (state: RootState) => state.memo.memoList

// State memoisation
export const selectMemoisedMemoList = createSelector(
	selecIsCreated,
	selectMemoList,
	(isCreated, memoList) => ({
		isCreated,
		memoList,
	}),
)

// Export actions
export const { setIsCreated, resetIsCreated, setMemoList, resetMemoList } =
	memoSlice.actions

export const addMemo =
	(memoToAdd: Memo) =>
	(dispatch: AppDispatch, getState: GetAppState): void => {
		const { memoList } = selectMemoisedMemoList(getState())
		const memoId = uuidv4()

		const newMemoList = [...memoList, { ...memoToAdd, id: memoId }]
		dispatch(setMemoList(newMemoList))
	}

export default memoSlice.reducer
