import { useState, useEffect, ChangeEvent } from 'react'
import { InputTagContainer } from './input-tag.styles'

type InputTagProps = {
	placeholder: string
	value?: string
	handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
	wordLimit?: number
	autoFocus?: boolean
}

export default function InputTag(props: InputTagProps) {
	const { placeholder, value, handleChange, wordLimit, autoFocus } = props

	const [inputValue, setInputValue] = useState<string>('')

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (wordLimit && e.target.value.length <= wordLimit) {
			handleChange && handleChange(e)
			setInputValue(() => e.target.value)
		} else if (!wordLimit) {
			handleChange && handleChange(e)
			setInputValue(() => e.target.value)
		}
	}

	useEffect(() => {
		if (value) {
			setInputValue(value)
		}
	}, [value])

	return (
		<InputTagContainer
			placeholder={placeholder}
			value={inputValue}
			onChange={handleInputChange}
			autoFocus={autoFocus}
		/>
	)
}

InputTag.defaultProps = {
	placeholder: '메시지를 입력해 주세요.',
}
