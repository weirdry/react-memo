import styled, { css } from 'styled-components'

type OverlayItemContainerProps = {
	isSystem: boolean
}

export const OverlayItemContainer = styled.button<OverlayItemContainerProps>`
	all: unset;
	cursor: pointer;

	width: 100%;

	display: flex;
	align-items: center;
	gap: 0.75rem;

	padding: 0.5rem 0;

	${(props) =>
		props.isSystem
			? css`
					color: var(--colour-system-inverted-on-background-active);
			  `
			: css`
					color: var(--colour-overlay-default-on-background-active);
			  `};

	span {
		width: 100%;

		font-family: var(--typo-overlay-body-font-family);
		font-weight: var(--typo-overlay-body-font-weight);
		font-size: var(--typo-overlay-body-font-size);
		line-height: var(--typo-overlay-body-line-height);
	}

	.icon-container {
		width: 1.25rem;
		height: 1.25rem;

		* {
			width: 1.25rem;
			height: 1.25rem;

			${(props) =>
				props.isSystem
					? css`
							fill: var(--colour-system-inverted-on-background-active);
					  `
					: css`
							fill: var(--colour-overlay-default-on-background-active);
					  `};
		}
	}
`
