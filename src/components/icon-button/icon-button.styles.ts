import styled, { css } from 'styled-components'

type IconButtonContainerProps = {
	isInverted: boolean
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

	${(props) =>
		props.isInverted
			? css`
					background-color: var(--colour-container-inverted-background-active);
					* {
						fill: var(--colour-container-inverted-on-background-active);
					}
			  `
			: css`
					background-color: var(--colour-container-default-background-active);
					* {
						fill: var(--colour-container-default-on-background-active);
					}
			  `}

	${(props) =>
		props.disabled
			? css`
					&:disabled {
						cursor: default;
						${props.isInverted
							? css`
									* {
										fill: var(
											--colour-container-inverted-on-background-inactive
										);
									}
							  `
							: css`
									* {
										fill: var(
											--colour-container-default-on-background-inactive
										);
									}
							  `}
					}
			  `
			: css`
					&:hover {
						${props.isInverted
							? css`
									background-color: var(
										--colour-container-inverted-background-hover
									);
									* {
										fill: var(--colour-container-inverted-on-background-hover);
									}
							  `
							: css`
									background-color: var(
										--colour-container-default-background-hover
									);
									* {
										fill: var(--colour-container-default-on-background-hover);
									}
							  `}
					}

					&:active {
						${props.isInverted
							? css`
									background-color: var(
										--colour-container-inverted-background-pressed
									);
									* {
										fill: var(
											--colour-container-inverted-on-background-pressed
										);
									}
							  `
							: css`
									background-color: var(
										--colour-container-default-background-pressed
									);
									* {
										fill: var(--colour-container-default-on-background-pressed);
									}
							  `}
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
