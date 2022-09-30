import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import Card from '../card/card.component'

import { ContentContainer } from './memo-item.styles'

type MemoItemProps = {
	title?: string
	body?: string
	date: string
}

export default function MemoItem(props: MemoItemProps) {
	const { title, body, date } = props

	const navigate = useNavigate()

	const handleClick = (e: MouseEvent<HTMLDivElement>): void =>
		navigate('/view-memo')

	return (
		<Card isClickable handleClick={handleClick}>
			<ContentContainer>
				{title && <h3>{title}</h3>}
				{body && <p>{body}</p>}
				<span>{date}</span>
			</ContentContainer>
		</Card>
	)
}

MemoItem.defaultProps = {
	title: '메모 제목',
	body: '대통령으로 선거될 수 있는 자는 국회의원의 피선거권이 있고 선거일 현재 40세에 달하여야 한다.',
	date: new Date(2022, 8, 27).toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	}),
}
