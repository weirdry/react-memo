import styled from 'styled-components'

import { InputWrapper } from '../../components/input-search/input-search.styles'

export const SearchContainer = styled.form`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	.body-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
	}

	.input-container {
		width: 100%;
		display: flex;
		justify-content: center;

		padding: 2rem 1rem 1rem 1rem;

		${InputWrapper} {
			max-width: 25rem;
		}
	}
`
