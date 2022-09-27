import styled from 'styled-components'
import { FloatingButtonContainer } from '../../components/floating-button/floating-button.styles'

import '../../assets/tokens/variables.css'

export const HomeContainer = styled.div`
	width: 100%;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	/* padding: 0 var(--grid-app-margin); */

	.lists-container {
		width: 100%;
		gap: 1.5rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	${FloatingButtonContainer} {
		position: fixed;
		bottom: 1.5rem;
		/* left: 50%;
		transform: translateX(-50%); */
	}
`
