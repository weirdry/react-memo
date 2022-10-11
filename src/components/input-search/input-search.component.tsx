import { useState, ChangeEvent, MouseEvent } from 'react'

import selectIcon from '../../assets/icons/iconSelector'

import {
	InputWrapper,
	InputSearchContainer,
	ClearButton,
} from './input-search.styles'

type InputSearchProps = {
	placeholder: string
	autoFocus: boolean
	handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function InputSearch(props: InputSearchProps) {
	const { placeholder, autoFocus, handleChange } = props

	const [value, setValue] = useState<string>('')

	const ClearIcon = selectIcon('clear')

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		handleChange && handleChange(e)
		setValue(() => e.target.value)
	}

	const handleClear = (e: MouseEvent<HTMLButtonElement>): void => setValue('')

	return (
		<InputWrapper>
			<InputSearchContainer
				type="search"
				name="search"
				value={value}
				placeholder={placeholder}
				autoFocus={autoFocus}
				autoComplete="off"
				onChange={handleInputChange}
			/>
			{value.length !== 0 && (
				<ClearButton type="button" onClick={handleClear}>
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
