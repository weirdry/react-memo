import styled from 'styled-components'

export const PlaceholderContainer = styled.div`
	width: 100%;
	height: 80vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;

	.placeholder-texts-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;

		margin-bottom: 15vh;

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
`
