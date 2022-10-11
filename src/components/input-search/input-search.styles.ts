import styled from 'styled-components'

import { InputContainer } from '../input-tag/input-tag.styles'

export const InputSearchContainer = styled(InputContainer)`
	&::-ms-clear,
	&::-ms-reveal {
		display: none;
		width: 0;
		height: 0;
	}
	&::-webkit-search-decoration,
	&::-webkit-search-cancel-button,
	&::-webkit-search-results-button,
	&::-webkit-search-results-decoration {
		display: none;
	}

	box-sizing: border-box;
	padding-right: 2.5rem;
`

export const InputWrapper = styled.div`
	width: 100%;
	position: relative;
`

export const ClearButton = styled.button`
	all: unset;
	cursor: pointer;

	position: absolute;
	top: 0.125rem;
	right: 0;

	&:active * {
		fill: var(--colour-container-default-on-background-pressed);
	}
`
