import styled, { css } from 'styled-components'

type ChipContainerProps = {
	disabled: boolean
}

export const ContentsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;

	border-radius: 0.5rem;

	word-wrap: normal;
	word-break: normal;
`

export const ChipContainer = styled.label<ChipContainerProps>`
	display: flex;
	flex-direction: row;

	cursor: pointer;

	input {
		all: unset;
		width: 0;
		height: 0;
	}

	${ContentsContainer} {
		.texts-container {
			display: flex;
			align-items: center;
			gap: 0.25rem;

			span.text,
			span.symbol {
				font-family: var(--typo-chip-inactive-font-family);
				font-weight: var(--typo-chip-inactive-font-weight);
				font-size: var(--typo-chip-inactive-font-size);
				line-height: var(--typo-chip-inactive-line-height);
			}
		}
	}

	span.count {
		font-family: var(--typo-chip-caption-font-family);
		font-weight: var(--typo-chip-caption-font-weight);
		font-size: var(--typo-chip-caption-font-size);
		line-height: var(--typo-chip-caption-line-height);
	}

	.icon-container {
		width: 1rem;
		height: 1rem;

		* {
			width: 1rem;
			height: 1rem;
		}
	}

	input:checked + ${ContentsContainer} {
		.texts-container span.text {
			font-family: var(--typo-chip-active-font-family);
			font-weight: var(--typo-chip-active-font-weight);
			font-size: var(--typo-chip-active-font-size);
			line-height: var(--typo-chip-active-line-height);
		}

		.icon-container * {
			fill: var(--colour-chip-inverted-on-background-active);
		}
	}
`

export const ChipSm = styled(ChipContainer)`
	${ContentsContainer} {
		background-color: none;
		box-shadow: 0 0 0 0.0625rem
			var(--colour-chip-default-on-background-inactive) inset;
		color: var(--colour-chip-default-on-background-inactive);
		padding: 0.25rem 0.5rem;

		.texts-container span.text {
			font-family: var(--typo-chip-inactive-font-family);
			font-weight: var(--typo-chip-inactive-font-weight);
			font-size: var(--typo-chip-inactive-font-size);
			line-height: var(--typo-chip-inactive-line-height);
		}
	}

	input:checked + ${ContentsContainer} {
		background-color: var(--colour-chip-inverted-background-inactive);
		box-shadow: none;
		.texts-container span.text {
			color: var(--colour-chip-inverted-on-background-active);
			font-weight: var(--typo-chip-inactive-font-weight);
		}
		.texts-container span.symbol {
			color: var(--colour-chip-inverted-on-background-inactive);
		}
	}

	${(props) =>
		!props.disabled &&
		css`
			${ContentsContainer}:hover {
				background-color: var(--colour-chip-default-background-hover);
				color: var(--colour-chip-default-on-background-hover);
			}
			${ContentsContainer}:active {
				background-color: var(--colour-chip-default-background-pressed);
				color: var(--colour-chip-default-on-background-pressed);
			}
			input:checked + ${ContentsContainer}:hover {
				background-color: var(--colour-chip-inverted-background-hover);
				box-shadow: none;
				color: var(--colour-chip-inverted-on-background-hover);
			}
			input:checked + ${ContentsContainer}:active {
				background-color: var(--colour-chip-inverted-background-pressed);
				box-shadow: none;
				color: var(--colour-chip-inverted-on-background-pressed);
			}
		`}
`

export const ChipMd = styled(ChipContainer)`
	${ContentsContainer} {
		background-color: var(--colour-chip-default-background-inactive);
		box-shadow: none;
		color: var(--colour-chip-default-on-background-inactive);
		padding: 0.5rem 0.75rem;
	}

	input:checked + ${ContentsContainer} {
		background-color: var(--colour-chip-inverted-background-active);
		color: var(--colour-chip-inverted-on-background-active);
		.texts-container span.symbol {
			color: var(--colour-chip-inverted-on-background-inactive);
		}
	}

	${(props) =>
		!props.disabled &&
		css`
			${ContentsContainer}:hover {
				background-color: var(--colour-chip-default-background-hover);
				color: var(--colour-chip-default-on-background-hover);
			}
			${ContentsContainer}:active {
				background-color: var(--colour-chip-default-background-pressed);
				color: var(--colour-chip-default-on-background-pressed);
			}
			input:checked + ${ContentsContainer}:hover {
				background-color: var(--colour-chip-inverted-background-hover);
				color: var(--colour-chip-inverted-on-background-hover);
			}
			input:checked + ${ContentsContainer}:active {
				background-color: var(--colour-chip-inverted-background-pressed);
				color: var(--colour-chip-inverted-on-background-pressed);
			}
		`}
`
