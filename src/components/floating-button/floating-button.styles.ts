import styled from 'styled-components'

export const FloatingButtonContainer = styled.button`
	all: unset;
	cursor: pointer;

	display: flex;
	align-items: center;
	gap: 0.5rem;

	padding: 0.5rem 1rem;

	border-radius: 10rem;

	background-color: var(--colour-container-inverted-background-active);

	box-shadow: 0 0.25rem 3rem rgba(0, 0, 0, 1);

	*:first-of-type {
		fill: var(--colour-container-inverted-on-background-active);
	}

	span {
		color: var(--colour-container-inverted-on-background-active);

		font-family: var(--typo-button-lg-text-font-family);
		font-weight: var(--typo-button-lg-text-font-weight);
		font-size: var(--typo-button-lg-text-font-size);
		line-height: var(--typo-button-lg-text-line-height);
	}
`
