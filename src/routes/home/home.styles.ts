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

	.contents-container {
		width: 100%;
		gap: 1.5rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	.placeholder {
		min-height: 80vh;
		justify-content: center;

		.placeholder-texts-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;

			color: var(--colour-app-on-background-inactive);

			h2 {
				font-family: var(--typo-route-title-font-family);
				font-weight: var(--typo-route-title-font-weight);
				font-size: var(--typo-route-title-font-size);
				line-height: var(--typo-route-title-line-height);
			}

			span {
				font-family: var(--typo-route-body-font-family);
				font-weight: var(--typo-route-body-font-weight);
				font-size: var(--typo-route-body-font-size);
				line-height: var(--typo-route-body-line-height);
			}
		}
	}

	${FloatingButtonContainer} {
		position: fixed;
		bottom: 1.5rem;
		/* left: 50%;
		transform: translateX(-50%); */
	}
`
