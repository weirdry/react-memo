import styled from '@emotion/styled'

import '../../assets/tokens/variables.css'

export const ToolBarContainer = styled.div`
	position: sticky;
	top: 0;

	width: 100%;
	height: 4rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 var(--grid-app-margin);

	background-color: var(--colour-container-default-background);
	color: var(--colour-container-default-on-background-active);

	h1 {
		font-family: var(--typo-route-title-font-family);
		font-weight: var(--typo-route-title-font-weight);
		font-size: var(--typo-route-title-font-size);
		line-height: var(--typo-route-title-line-height);
	}

	.buttons-container {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 0.25rem;
	}
`
