import { MouseEvent } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import {
	selectMemoisedMemoList,
	resetMemo,
	resetIsModified,
} from '../../store/memo/memoSlice'

import Toast from '../toast/toast.component'
import FloatingButton from '../floating-button/floating-button.component'

import { BottomOverlayContainer } from './bottom-overlay.styles'

export default function BottomOverlay() {
	const { isModified } = useAppSelector(selectMemoisedMemoList)

	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const location = useLocation()

	const selectedToast = (toastType: typeof isModified): JSX.Element | null => {
		switch (toastType.modificationState) {
			case 'none':
				return null
			case 'created':
				return (
					<Toast
						toastType="success"
						text={`${
							toastType.modifiactionType === 'memo' ? '메모를' : '태그를'
						} 성공적으로 추가했습니다.`}
					/>
				)
			case 'edited':
				return (
					<Toast
						toastType="success"
						text={`${
							toastType.modifiactionType === 'memo' ? '메모를' : '태그를'
						} 성공적으로 변경했습니다.`}
					/>
				)
			case 'deleted':
				return (
					<Toast
						toastType="delete"
						text={`${
							toastType.modifiactionType === 'memo' ? '메모를' : '태그를'
						} 성공적으로 삭제했습니다.`}
					/>
				)
			default:
				return null
		}
	}

	const handleCreate = (e: MouseEvent<HTMLButtonElement>): void => {
		dispatch(resetMemo())
		dispatch(resetIsModified())
		navigate('/create-memo')
	}

	return (
		<BottomOverlayContainer>
			{selectedToast(isModified)}

			{location.pathname === '/' && (
				<FloatingButton
					text="새 메모"
					icon="write"
					handleClick={handleCreate}
				/>
			)}
		</BottomOverlayContainer>
	)
}
