import { useState, useEffect, ChangeEvent, MouseEvent } from 'react'

import selectIcon from '../../assets/icons/iconSelector'

import {
	InputWrapper,
	InputSearchContainer,
	ClearButton,
} from './input-search.styles'

type InputSearchProps = {
	value?: string
	placeholder: string
	autoFocus: boolean
	handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
	handleClear?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function InputSearch(props: InputSearchProps) {
	const { value, placeholder, autoFocus, handleChange, handleClear } = props

	const [inputValue, setInputValue] = useState<string>('')

	const ClearIcon = selectIcon('clear')

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		handleChange && handleChange(e)
		setInputValue(() => e.target.value)
	}

	const handleInputClear = (e: MouseEvent<HTMLButtonElement>): void => {
		handleClear && handleClear(e)
		setInputValue('')
	}

	useEffect(() => {
		value && setInputValue(value)
	}, [value])

	return (
		<InputWrapper>
			<InputSearchContainer
				type="search"
				name="search"
				value={inputValue}
				placeholder={placeholder}
				autoFocus={autoFocus}
				autoComplete="off"
				onChange={handleInputChange}
			/>
			{inputValue.length !== 0 && (
				<ClearButton type="button" onClick={handleInputClear}>
					<ClearIcon />
				</ClearButton>
			)}
		</InputWrapper>
	)
}

InputSearch.defaultProps = {
	placeholder: '검색어를 입력해 주세요.',
	autoFocus: true,
}
