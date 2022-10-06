import { useState, useEffect, ChangeEvent } from 'react'
import { InputTagContainer } from './input-tag.styles'

type InputTagProps = {
	placeholder: string
	value?: string
	handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function InputTag(props: InputTagProps) {
	const { placeholder, value, handleChange } = props

	const [inputValue, setInputValue] = useState<string>('')

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleChange && handleChange(e)
		setInputValue(() => e.target.value)
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
		/>
	)
}

InputTag.defaultProps = {
	placeholder: '메시지를 입력해 주세요.',
}
