import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { RootState, AppDispatch, GetAppState } from '../store'

export type Memo = {
	id: string
	title: string
	body: string
	createdAt: string
	isPinned: boolean
	memoTag: Tag['name'][]
}

export type Tag = {
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
	selectedTag: Tag['name']
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
	tag: { name: '', count: 0 },
	tagList: [],
	selectedTag: '',
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
		setSelectedTag: (state, action: PayloadAction<Tag['name']>) => {
			state.selectedTag = action.payload
		},
		resetSelectedTag: (state) => {
			state.selectedTag = initialState.selectedTag
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
	return state.memo.selectedTag === ''
		? unpinnedMemoList
		: unpinnedMemoList.filter((memo) =>
				memo.memoTag.includes(state.memo.selectedTag),
		  )
}
export const selectPinnedMemoList = (state: RootState) => {
	const pinnedMemoList = state.memo.memoList.filter((memo) => memo.isPinned)
	return state.memo.selectedTag === ''
		? pinnedMemoList
		: pinnedMemoList.filter((memo) =>
				memo.memoTag.includes(state.memo.selectedTag),
		  )
}
export const selectTag = (state: RootState) => state.memo.tag
export const selectTagList = (state: RootState) => state.memo.tagList
export const selectSelectedTag = (state: RootState) => state.memo.selectedTag

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
	(
		isModified,
		memo,
		memoList,
		unpinnedMemoList,
		pinnedMemoList,
		tag,
		tagList,
		selectedTag,
	) => ({
		isModified,
		memo,
		memoList,
		unpinnedMemoList,
		pinnedMemoList,
		tag,
		tagList,
		selectedTag,
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

	dispatch(setMemoList(newMemoList))
}

export const addTag = (dispatch: AppDispatch, getState: GetAppState) => {
	const { tag, tagList } = selectMemoisedMemoList(getState())
	const newTagList = [...tagList, tag]

	dispatch(setTagList(newTagList))
}

export const calcTagCount =
	(tagNameToCalc: Tag['name'], amount: number) =>
	(dispatch: AppDispatch, getState: GetAppState) => {
		const { tagList } = selectMemoisedMemoList(getState())

		const findIndex = tagList.findIndex(
			(storedTag) => storedTag.name === tagNameToCalc,
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
	(tagNameToAdd: string) => (dispatch: AppDispatch, getState: GetAppState) => {
		const { memo } = selectMemoisedMemoList(getState())

		if (memo.memoTag.find((storedTagName) => storedTagName === tagNameToAdd))
			return

		const newMemoTag = [...memo.memoTag, tagNameToAdd]

		dispatch(setMemo({ ...memo, memoTag: newMemoTag }))
		dispatch(calcTagCount(tagNameToAdd, +1))
	}

export const removeTagFromMemo =
	(tagNameToRemove: string) =>
	(dispatch: AppDispatch, getState: GetAppState) => {
		const { memo } = selectMemoisedMemoList(getState())
		const newMemoTag = memo.memoTag.filter(
			(storedTagName) => storedTagName !== tagNameToRemove,
		)

		dispatch(setMemo({ ...memo, memoTag: newMemoTag }))
		dispatch(calcTagCount(tagNameToRemove, -1))
	}

export default memoSlice.reducer
