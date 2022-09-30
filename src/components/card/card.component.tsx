import { ReactNode, MouseEvent } from 'react'

import { CardContainer } from './card.styles'

export type CardType = 'list' | 'detailed'

type CardProps = {
	cardType: CardType
	isClickable: boolean
	handleClick?: (e: MouseEvent<HTMLDivElement>) => void
	children: ReactNode | null
}

export default function Card(props: CardProps) {
	const { cardType, isClickable, handleClick, children } = props

	return (
		<CardContainer
			cardType={cardType}
			isClickable={isClickable}
			onClick={handleClick}
		>
			{children}
		</CardContainer>
	)
}

Card.defaultProps = {
	cardType: 'list',
	isClickable: false,
	children: null,
}
