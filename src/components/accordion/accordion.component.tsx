import { ReactNode, useState, MouseEvent } from 'react'

import IconButton from '../icon-button/icon-button.component'

import { AccordionContainer } from './accordion.styles'

type AccordionProps = {
	text: string
	children: ReactNode | null
	isOpen: boolean
}

export default function Accordion(props: AccordionProps) {
	const { text, children } = props
	const [isOpen, setIsOpen] = useState(false)

	const handleOpen = (e: MouseEvent<HTMLDivElement>): void => setIsOpen(!isOpen)

	return (
		<AccordionContainer isOpen={isOpen}>
			<div className="accordion-handle-row" onClick={handleOpen}>
				<h1>{text}</h1>
				<IconButton size="sm" icon="expand" />
			</div>
			{isOpen && children}
		</AccordionContainer>
	)
}

Accordion.defaultProps = {
	text: '아코디언',
	children: '아코디언 내용',
	isOpen: true,
}
