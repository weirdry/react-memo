import { ReactNode } from 'react'

import { CardContainer } from './card.styles'

type CardProps = {
	children: ReactNode | null
}

export default function Card(props: CardProps) {
	const { children } = props

	return <CardContainer>{children}</CardContainer>
}

Card.defaultProps = {
	children: null,
}
