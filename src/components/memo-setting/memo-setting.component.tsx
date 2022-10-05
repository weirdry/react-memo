import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
	editMemoPin,
	deleteMemo,
	setIsModified,
	resetIsModified,
	selectMemoisedMemoList,
} from '../../store/memo/memoSlice'

import OverlayItem from '../overlay-item/overlay-item.component'

import { MemoSettingContainer } from './memo-setting.styles'

type MemoSettingProps = {
	isDirectlySave: boolean
}

export default function MemoSetting(props: MemoSettingProps) {
	const { isDirectlySave } = props

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const { memo } = useAppSelector(selectMemoisedMemoList)

	const handlePin = (e: MouseEvent<HTMLButtonElement>): void => {
		dispatch(editMemoPin(isDirectlySave))

		dispatch(setIsModified('edited'))
		setTimeout(() => dispatch(resetIsModified()), 2000)
	}

	const handleDelete = (e: MouseEvent<HTMLButtonElement>): void => {
		if (window.confirm('메모를 삭제하시겠습니까?')) {
			dispatch(deleteMemo)

			dispatch(setIsModified('deleted'))
			setTimeout(() => dispatch(resetIsModified()), 2000)

			navigate('/')
		} else {
			return
		}
	}

	return (
		<MemoSettingContainer>
			<OverlayItem
				icon="pin"
				text="즐겨찾기 메모로 지정"
				isToggle
				isActivated={memo.isPinned}
				handleClick={handlePin}
			/>
			<OverlayItem
				isSystem
				icon="delete"
				text="메모 삭제"
				handleClick={handleDelete}
			/>
		</MemoSettingContainer>
	)
}

MemoSetting.defaultProps = {
	isDirectlySave: false,
}
