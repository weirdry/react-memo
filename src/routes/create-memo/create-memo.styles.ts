import styled from 'styled-components'

import { CardContainer } from '../../components/card/card.styles'

export const CreateMemoContainer = styled.div`
	width: 100%;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	form {
		width: 100%;
	}

	.body-container {
		width: 100%;

		padding: 1rem 1rem 3rem 1rem;

		${CardContainer} {
			min-height: 12.825rem;

			.inputs-container {
				width: 100%;
				/* height: 100%; */
				display: flex;
				flex-direction: column;
				gap: 2rem;
			}
		}
	}
`
