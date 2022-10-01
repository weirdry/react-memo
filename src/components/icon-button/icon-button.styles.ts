import styled, { css } from 'styled-components'

import '../../assets/tokens/variables.css'

type IconButtonContainerProps = {
	disabled: boolean
}

export const IconButtonContainer = styled.button<IconButtonContainerProps>`
	all: unset;
	cursor: pointer;

	width: 2.5rem;
	height: 2.5rem;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: var(--radii-iconbutton-container);
	background-color: var(--colour-container-default-background-active);

	* {
		fill: var(--colour-container-default-on-background-active);
	}

	${(props) =>
		props.disabled
			? css`
					&:disabled {
						cursor: default;

						* {
							fill: var(--colour-container-default-on-background-inactive);
						}
					}
			  `
			: css`
					&:hover {
						background-color: var(--colour-container-default-background-hover);
						* {
							fill: var(--colour-container-default-on-background-hover);
						}
					}

					&:active {
						background-color: var(
							--colour-container-default-background-pressed
						);
						* {
							fill: var(--colour-container-default-on-background-pressed);
						}
					}
			  `}
`

export const IconButtonContainerMD = styled(IconButtonContainer)`
	width: 2.5rem;
	height: 2.5rem;

	* {
		width: 1.5rem;
		height: 1.5rem;
	}
`

export const IconButtonContainerSM = styled(IconButtonContainer)`
	width: 2rem;
	height: 2rem;

	* {
		width: 1rem;
		height: 1rem;
	}
`
