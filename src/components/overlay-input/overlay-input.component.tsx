import { MouseEvent, ChangeEvent } from 'react'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { setTag, selectMemoisedMemoList } from '../../store/memo/memoSlice'

import InputTag from '../input-tag/input-tag.component'
import Button from '../button/button.component'

import { OverlayInputContainer } from './overlay-input.styles'

type OverlayInputProps = {
	handleCancel: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function OverlayInput(props: OverlayInputProps) {
	const { handleCancel } = props

	const { tag } = useAppSelector(selectMemoisedMemoList)
	const dispatch = useAppDispatch()

	const handeChange = (e: ChangeEvent<HTMLInputElement>): void => {
		dispatch(setTag({ name: e.target.value }))
	}

	return (
		<OverlayInputContainer>
			<div className="input-container">
				<span className="symbol">#</span>
				<InputTag
					placeholder="태그 이름을 입력해 주세요."
					value={tag.name}
					handleChange={handeChange}
					wordLimit={16}
					autoFocus
				/>
			</div>
			<div className="buttons-container">
				<Button hierarchy="system" text="취소" handleClick={handleCancel} />
				<Button
					hierarchy="primary"
					text="태그 등록"
					type="submit"
					disabled={tag.name === ''}
				/>
			</div>
		</OverlayInputContainer>
	)
}

OverlayInput.defaultProps = {
	handleCancel: () => {},
}
