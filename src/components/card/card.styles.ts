import styled, { css } from 'styled-components'

import { CardType } from './card.component'

import '../../assets/tokens/variables.css'

type CardContainerProps = {
	cardType: CardType
	isClickable: boolean
}

export const CardContainer = styled.div<CardContainerProps>`
	width: 100%;
	min-height: ${(props) => (props.cardType === 'list' ? `4rem` : `12.825rem;`)};

	${(props) =>
		props.isClickable &&
		css`
			cursor: pointer;
		`}

	padding: var(--padding-card-container);
	border-radius: var(--radii-card-container);

	background-color: var(--colour-card-default-background-active);
`
