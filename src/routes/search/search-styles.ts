import styled from 'styled-components'

import { InputContainer } from '../../components/input-tag/input-tag.styles'

export const SearchContainer = styled.form`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	.body-container {
		width: 100%;
		display: flex;
		align-items: flex-start;
		/* flex-direction: column; */
		gap: 0.5rem;

		padding: 2rem 1rem 1rem 1rem;
	}

	.input-container {
		width: 100%;
		display: flex;
		justify-content: center;

		${InputContainer} {
			max-width: 25rem;
		}
	}
`
