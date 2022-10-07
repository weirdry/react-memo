import { useState, useEffect, MouseEvent, ChangeEvent } from 'react'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { setTag, selectMemoisedMemoList } from '../../store/memo/memoSlice'

import InputTag from '../input-tag/input-tag.component'
import Button from '../button/button.component'

import { OverlayInputContainer } from './overlay-input.styles'

type OverlayInputProps = {
	handleCancel: (e: MouseEvent<HTMLButtonElement>) => void
}

enum WarningType {
	none = '',
	duplication = '중복된 태그가 있습니다.',
}

export default function OverlayInput(props: OverlayInputProps) {
	const { handleCancel } = props

	const [isValidated, setIsValidated] = useState<boolean>(false)

	const { tag, tagList } = useAppSelector(selectMemoisedMemoList)
	const dispatch = useAppDispatch()

	const handeChange = (e: ChangeEvent<HTMLInputElement>): void => {
		dispatch(setTag({ name: e.target.value.replace(/ /g, '_') }))
	}

	useEffect(() => {
		tag.name !== ''
			? tagList.every((storedTag) => storedTag.name !== tag.name)
				? setIsValidated(true)
				: setIsValidated(false)
			: setIsValidated(false)
	}, [tag, tagList])

	return (
		<OverlayInputContainer>
			<div className="input-tag-container">
				<span className="symbol">#</span>
				<div className="input-container">
					<InputTag
						placeholder="태그 이름을 입력해 주세요."
						value={tag.name}
						handleChange={handeChange}
						wordLimit={16}
						autoFocus
					/>
					<div className="guide-container">
						<span className="guide">{WarningType.duplication}</span>
						<span className="count">{tag.name.length}/16</span>
					</div>
				</div>
			</div>
			<div className="buttons-container">
				<Button hierarchy="system" text="취소" handleClick={handleCancel} />
				<Button
					hierarchy="primary"
					text="태그 등록"
					type="submit"
					disabled={!isValidated}
				/>
			</div>
		</OverlayInputContainer>
	)
}

OverlayInput.defaultProps = {
	handleCancel: () => {},
}
