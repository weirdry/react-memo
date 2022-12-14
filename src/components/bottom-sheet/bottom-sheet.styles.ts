import styled from 'styled-components'

import { IconButtonContainer } from '../icon-button/icon-button.styles'

export const BottomSheetContainer = styled.div`
	width: 100%;
	max-width: 25rem;

	position: fixed;
	/* left: 0; */
	bottom: 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	background-color: var(--colour-overlay-default-background-active);
	border-radius: 1.5rem 1.5rem 0 0;
	box-shadow: 0 -1rem 3rem rgba(0, 0, 0, 0.5);

	padding: 1.5rem 1rem 3rem 1rem;

	color: var(--colour-overlay-default-on-background-active);

	z-index: 11;

	.heading-container {
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: space-between;

		${IconButtonContainer} {
			background: none;
		}

		h2 {
			font-family: var(--typo-overlay-title-font-family);
			font-weight: var(--typo-overlay-title-font-weight);
			font-size: var(--typo-overlay-title-font-size);
			line-height: var(--typo-overlay-title-line-height);
		}
	}

	.items-container {
		width: 100%;

		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	animation: bottom-sheet-animation 0.15s ease-out 1 forwards normal;

	@keyframes bottom-sheet-animation {
		0% {
			transform: translateY(20rem);
		}
		100% {
			transform: translateY(0rem);
		}
	}
`
