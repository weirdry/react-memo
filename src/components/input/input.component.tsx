import { useRef, useState, useEffect, ChangeEvent } from 'react'

import { BaseTextarea, TitleInput, BodyTextarea } from './input.styles'

type InputSelect = 'title' | 'body'

type InputProps = {
	inputType: InputSelect
	placeholder: string
	value?: string
	handleChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const selectInput = (inputType: InputSelect): typeof BaseTextarea => {
	switch (inputType) {
		case 'title':
			return TitleInput
		case 'body':
			return BodyTextarea
		default:
			return BodyTextarea
	}
}

export default function Input(props: InputProps) {
	const { inputType, placeholder, value, handleChange } = props

	const [inputValue, setInputValue] = useState<string>('')
	const inputRef = useRef<HTMLTextAreaElement | null>(null)

	const SelectedInput = selectInput(inputType)

	const handleResize = () => {
		if (inputRef && inputRef.current) {
			inputRef.current.style.height = '0px'
			const scrollHeight = inputRef.current.scrollHeight
			inputRef.current.style.height = scrollHeight + 'px'
		}
	}

	const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		handleChange && handleChange(e)
		setInputValue(() => e.target.value)
	}

	useEffect(handleResize, [inputValue])

	useEffect(() => {
		if (value) {
			setInputValue(value)
		}
	}, [value])

	return (
		<SelectedInput
			name={inputType}
			placeholder={placeholder}
			value={inputValue}
			ref={inputRef}
			onChange={handleInputChange}
			onInput={handleResize}
		/>
	)
}

Input.defaultProps = {
	placeholder: '내용을 입력해 주세요.',
}
