import styled from '@emotion/styled'
import { css } from '@emotion/react'
import IconButton from '../icon-button/icon-button.component'

type AccordionContainerProps = { isOpen: boolean }

export const AccordionContainer = styled.div`
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

		*:last-child {
			transform-origin: center center;
			${(props: AccordionContainerProps) =>
				props.isOpen
					? css`
							transform: rotate(180deg);
					  `
					: css`
							transform: rotate(90deg);
					  `}
		}
	}
`
