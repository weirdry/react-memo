import styled from '@emotion/styled'

import '../../assets/tokens/variables.css'

export const IconButtonContainer = styled.button`
	all: unset;
	cursor: pointer;

	width: 2.5rem;
	height: 2.5rem;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 0.5rem;
	background-color: var(--colour-container-default-background-active);

	* {
		fill: var(--colour-container-default-on-background-active);
	}

	&:hover {
		background-color: var(--colour-container-default-background-hover);
		* {
			fill: var(--colour-container-default-on-background-hover);
		}
	}

	&:active {
		background-color: var(--colour-container-default-background-pressed);
		* {
			fill: var(--colour-container-default-on-background-pressed);
		}
	}
`
