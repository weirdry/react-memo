import { useState, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLongPress } from 'use-long-press'

import { Memo } from '../../store/memo/memoSlice'

import Card from '../card/card.component'

import { ContentContainer } from './memo-item.styles'

type MemoItemProps = {
	memo: Memo
}

export default function MemoItem({ memo }: MemoItemProps) {
	const { id, title, body, createdAt } = memo

	const [isLongPressed, setIsLongPressed] = useState<boolean>(false)

	const navigate = useNavigate()

	const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
		!isLongPressed && navigate(`/view-memo/${id}`)
	}

	const handleLongTap = () => {
		console.log('long pressed')
	}

	const bind = useLongPress(handleLongTap, {
		onStart: () => setIsLongPressed(true),
		onCancel: () => setIsLongPressed(false),
	})

	return (
		<div {...bind()}>
			<Card isClickable handleClick={handleClick}>
				<ContentContainer>
					{title && <h3>{title}</h3>}
					{body && <p>{body}</p>}
					<span>{createdAt}</span>
				</ContentContainer>
			</Card>
		</div>
	)
}

MemoItem.defaultProps = {
	memo: {
		id: '',
		title: '메모 제목',
		body: '대통령으로 선거될 수 있는 자는 국회의원의 피선거권이 있고 선거일 현재 40세에 달하여야 한다.',
		date: new Date(2022, 8, 27).toLocaleDateString('ko-KR', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		}),
	},
}
