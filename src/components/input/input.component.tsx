import { useState, useEffect, useRef, ChangeEvent } from 'react'

import { BaseTextarea, TitleInput, BodyTextarea } from './input.styles'

type InputSelect = 'title' | 'body'

type InputProps = {
	inputType: InputSelect
	placeholder: string
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
	const { inputType, placeholder } = props
	const [inputValue, setInputValue] = useState<string>()

	const inputRef = useRef<HTMLTextAreaElement | null>(null)

	const SelectedInput = selectInput(inputType)

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void =>
		setInputValue(e.target.value)

	useEffect(() => {
		if (inputRef && inputRef.current) {
			inputRef.current.style.height = '0px'
			const scrollHeight = inputRef.current.scrollHeight
			inputRef.current.style.height = scrollHeight + 'px'
		}
	}, [inputValue])

	return (
		<SelectedInput
			placeholder={placeholder}
			ref={inputRef}
			onChange={handleChange}
		/>
	)
}

Input.defaultProps = {
	placeholder: '내용을 입력해 주세요.',
}
