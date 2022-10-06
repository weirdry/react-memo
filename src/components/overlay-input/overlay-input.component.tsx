import { useState, MouseEvent, ChangeEvent } from 'react'

import InputTag from '../input-tag/input-tag.component'
import Button from '../button/button.component'

import { OverlayInputContainer } from './overlay-input.styles'

type OverlayInputProps = {
	handleConfirm: (e: MouseEvent<HTMLButtonElement>) => void
	handleCancel: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function OverlayInput(props: OverlayInputProps) {
	const { handleConfirm, handleCancel } = props

	const [tagName, setTagName] = useState<string>('')

	const handeChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setTagName(() => e.target.value)
	}

	return (
		<OverlayInputContainer>
			<div className="input-container">
				<span className="symbol">#</span>
				<InputTag
					placeholder="태그 이름을 입력해 주세요."
					value={tagName}
					handleChange={handeChange}
				/>
			</div>
			<div className="buttons-container">
				<Button hierarchy="system" text="취소" />
				<Button hierarchy="primary" text="태그 등록" />
			</div>
		</OverlayInputContainer>
	)
}

OverlayInput.defaultProps = {
	handleConfirm: () => {},
	handleCancel: () => {},
}
