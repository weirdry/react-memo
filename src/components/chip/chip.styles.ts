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

	border-radius: 0.5rem;

	word-wrap: normal;
	word-break: normal;

	.icon-container {
		width: 1rem;
		height: 1rem;

		* {
			width: 1rem;
			height: 1rem;
		}
	}

	span.count {
		font-family: var(--typo-chip-caption-font-family);
		font-weight: var(--typo-chip-caption-font-weight);
		font-size: var(--typo-chip-caption-font-size);
		line-height: var(--typo-chip-caption-line-height);
	}

	${(props) =>
		props.isSelected
			? css`
					.texts-container {
						font-family: var(--typo-chip-active-font-family);
						font-weight: var(--typo-chip-active-font-weight);
						font-size: var(--typo-chip-active-font-size);
						line-height: var(--typo-chip-active-line-height);
					}

					.icon-container * {
						fill: var(--colour-chip-inverted-on-background-active);
					}
			  `
			: css`
					.texts-container {
						font-family: var(--typo-chip-inactive-font-family);
						font-weight: var(--typo-chip-inactive-font-weight);
						font-size: var(--typo-chip-inactive-font-size);
						line-height: var(--typo-chip-inactive-line-height);
					}
			  `}
`

export const ChipSm = styled(ChipContainer)`
	padding: 0.25rem 0.5rem;

	.texts-container {
		font-family: var(--typo-chip-inactive-font-family);
		font-weight: var(--typo-chip-inactive-font-weight);
		font-size: var(--typo-chip-inactive-font-size);
		line-height: var(--typo-chip-inactive-line-height);
	}

	${(props) =>
		props.isSelected
			? css`
					background-color: var(--colour-chip-inverted-background-inactive);
					box-shadow: none;

					color: var(--colour-chip-inverted-on-background-active);

					.texts-container span.symbol {
						color: var(--colour-chip-inverted-on-background-inactive);
					}
			  `
			: css`
					background-color: none;
					box-shadow: 0 0 0 0.0625rem
						var(--colour-chip-default-on-background-inactive) inset;

					color: var(--colour-chip-default-on-background-inactive);
			  `}

	&:hover {
		${(props) =>
			props.isSelected
				? css`
						background-color: var(--colour-chip-inverted-background-hover);
						box-shadow: none;

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
						box-shadow: none;

						color: var(--colour-chip-inverted-on-background-pressed);
				  `
				: css`
						background-color: var(--colour-chip-default-background-pressed);
						color: var(--colour-chip-default-on-background-pressed);
				  `}
	}
`

export const ChipMd = styled(ChipContainer)`
	padding: 0.5rem 0.75rem;
	border: none;

	${(props) =>
		props.isSelected
			? css`
					background-color: var(--colour-chip-inverted-background-active);
					color: var(--colour-chip-inverted-on-background-active);

					.texts-container span.symbol {
						color: var(--colour-chip-inverted-on-background-inactive);
					}
			  `
			: css`
					background-color: var(--colour-chip-default-background-inactive);
					color: var(--colour-chip-default-on-background-inactive);
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
