import styled, { css } from 'styled-components'

import '../../assets/tokens/variables.css'

type ToggleContainerProps = {
	isActivated: boolean
}

export const ToggleContainer = styled.div<ToggleContainerProps>`
	width: 3.5rem;
	height: 1.5rem;

	display: block;
	position: relative;

	cursor: pointer;

	padding: 0.125rem;
	border-radius: 0.75rem;

	span.handle {
		width: 1.25rem;
		height: 1.25rem;

		position: absolute;
		left: 0.125rem;

		border-radius: 6.125rem;

		transition: all 0.15s ease-in-out;
	}

	transition: all 0.15s ease-in-out;

	${(props) =>
		props.isActivated
			? css`
					background-color: var(--colour-overlay-default-on-background-active);

					span.handle {
						left: calc(100% - 1.375rem);
						background-color: var(--colour-overlay-default-background-active);
					}
			  `
			: css`
					background-color: var(
						--colour-overlay-default-on-background-inactive
					);

					span.handle {
						background-color: var(--colour-overlay-default-background-inactive);
					}
			  `}
`
