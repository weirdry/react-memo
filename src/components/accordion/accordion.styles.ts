import styled, { css } from 'styled-components'

import { IconButtonContainer } from '../icon-button/icon-button.styles'

type AccordionContainerProps = { isOpen: boolean }

export const AccordionContainer = styled.div<AccordionContainerProps>`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	.accordion-handle-row {
		cursor: pointer;

		width: 100%;

		display: flex;
		align-items: center;
		justify-content: space-between;

		h1 {
			font-family: var(--typo-route-sectiontitle-font-family);
			font-weight: var(--typo-route-sectiontitle-font-weight);
			font-size: var(--typo-route-sectiontitle-font-size);
			line-height: var(--typo-route-sectiontitle-line-height);
		}

		${IconButtonContainer} {
			transform-origin: center center;
			transition-duration: 0.25s;
			${(props) =>
				props.isOpen
					? css`
							transform: rotate(180deg);
					  `
					: css`
							transform: rotate(0deg);
					  `}
		}
	}
`
