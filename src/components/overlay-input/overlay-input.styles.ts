import styled from 'styled-components'

export const OverlayInputContainer = styled.div`
	width: 90vw;

	display: flex;
	flex-direction: column;
	gap: 3rem;

	padding: 1.5rem;
	border-radius: 1.5rem;

	background-color: var(--colour-overlay-default-background-active);
	box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.5);

	z-index: 11;

	.input-container {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 0.5rem;

		span.symbol {
			color: var(--colour-container-default-on-background-inactive);

			font-family: var(--typo-route-sectiontitle-font-family);
			font-weight: var(--typo-route-sectiontitle-font-weight);
			font-size: var(--typo-route-sectiontitle-font-size);
			line-height: var(--typo-route-sectiontitle-line-height);
		}
	}

	.buttons-container {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1rem;
	}
`
