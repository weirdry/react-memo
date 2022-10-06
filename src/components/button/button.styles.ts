import styled, { css } from 'styled-components'

type ButtonContainerProps = {
	disabled: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
	all: unset;
	cursor: pointer;

	padding: 0.75rem 1.5rem;

	border-radius: 3rem;

	font-family: var(--typo-button-title-font-family);
	font-weight: var(--typo-button-title-font-weight);
	font-size: var(--typo-button-title-font-size);
	line-height: var(--typo-button-title-line-height);
`

export const PrimaryButton = styled(ButtonContainer)`
	background-color: var(--colour-button-primary-background-active);
	color: var(--colour-button-primary-on-background-active);

	&:hover {
		background-color: var(--colour-button-primary-background-hover);
		color: var(--colour-button-primary-on-background-hover);
	}
	&:active {
		background-color: var(--colour-button-primary-background-pressed);
		color: var(--colour-button-primary-on-background-pressed);
	}

	${(props) =>
		props.disabled &&
		css`
			&:disabled {
				cursor: default;
				background-color: var(--colour-button-primary-background-inactive);
				color: var(--colour-button-primary-on-background-inactive);
			}
		`}
`

export const SecondaryButton = styled(ButtonContainer)`
	background-color: var(--colour-button-secondary-background-active);
	color: var(--colour-button-secondary-on-background-active);

	&:hover {
		background-color: var(--colour-button-secondary-background-hover);
		color: var(--colour-button-secondary-on-background-hover);
	}
	&:active {
		background-color: var(--colour-button-secondary-background-pressed);
		color: var(--colour-button-secondary-on-background-pressed);
	}

	${(props) =>
		props.disabled &&
		css`
			&:disabled {
				cursor: default;
				background-color: var(--colour-button-secondary-background-inactive);
				color: var(--colour-button-secondary-on-background-inactive);
			}
		`}
`

export const SystemButton = styled(ButtonContainer)`
	background-color: var(--colour-button-secondary-background-active);
	color: var(--colour-button-system-background-active);

	&:hover {
		background-color: var(--colour-button-secondary-background-hover);
		color: var(--colour-button-system-background-hover);
	}
	&:active {
		background-color: var(--colour-button-secondary-background-pressed);
		color: var(--colour-button-system-background-pressed);
	}

	${(props) =>
		props.disabled &&
		css`
			&:disabled {
				cursor: default;
				background-color: var(--colour-button-secondary-background-inactive);
				color: var(--colour-button-system-on-background-inactive);
			}
		`}
`
