import styled, { css } from 'styled-components'

type ChipContainerProps = {
	isSelected: boolean
}

export const ChipContainer = styled.button<ChipContainerProps>`
	all: unset;
	cursor: pointer;

	display: flex;
	align-items: center;
	gap: 0.5rem;

	padding: 0.5rem 0.75rem;
	border-radius: 0.5rem;

	word-wrap: normal;
	word-break: normal;

	${(props) =>
		props.isSelected
			? css`
					background-color: var(--colour-chip-inverted-background-active);
					color: var(--colour-chip-inverted-on-background-active);

					.texts-container {
						font-family: var(--typo-chip-active-font-family);
						font-weight: var(--typo-chip-active-font-weight);
						font-size: var(--typo-chip-active-font-size);
						line-height: var(--typo-chip-active-line-height);

						span.symbol {
							color: var(--colour-chip-inverted-on-background-inactive);
						}
					}

					span.count {
						font-family: var(--typo-chip-caption-font-family);
						font-weight: var(--typo-chip-caption-font-weight);
						font-size: var(--typo-chip-caption-font-size);
						line-height: var(--typo-chip-caption-line-height);
					}
			  `
			: css`
					background-color: var(--colour-chip-default-background-inactive);
					color: var(--colour-chip-default-on-background-inactive);

					.texts-container {
						font-family: var(--typo-chip-inactive-font-family);
						font-weight: var(--typo-chip-inactive-font-weight);
						font-size: var(--typo-chip-inactive-font-size);
						line-height: var(--typo-chip-inactive-line-height);
					}

					span.count {
						font-family: var(--typo-chip-caption-font-family);
						font-weight: var(--typo-chip-caption-font-weight);
						font-size: var(--typo-chip-caption-font-size);
						line-height: var(--typo-chip-caption-line-height);
					}
			  `}

	&:hover {
		${(props) =>
			props.isSelected
				? css`
						background-color: var(--colour-chip-inverted-background-hover);
						color: var(--colour-chip-inverted-on-background-hover);
				  `
				: css`
						background-color: var(--colour-chip-default-background-hover);
						color: var(--colour-chip-default-on-background-hover);
				  `}
	}

	&:active {
		${(props) =>
			props.isSelected
				? css`
						background-color: var(--colour-chip-inverted-background-pressed);
						color: var(--colour-chip-inverted-on-background-pressed);
				  `
				: css`
						background-color: var(--colour-chip-default-background-pressed);
						color: var(--colour-chip-default-on-background-pressed);
				  `}
	}
`
