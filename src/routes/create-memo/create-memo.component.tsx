import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import Card from '../../components/card/card.component'
import Input from '../../components/input/input.component'

import { CreateMemoContainer } from './create-memo.styles'

export default function CreateMemo() {
	const navigate = useNavigate()

	const handleBackwards = (e: MouseEvent<HTMLButtonElement>): void =>
		navigate('/')

	return (
		<CreateMemoContainer>
			<ToolBar
				isLeftSideOn
				leftSideChildren={
					<IconButton icon="backwards" handleClick={handleBackwards} />
				}
				rightSideChildren={<IconButton icon="confirm" />}
			/>

			<div className="body-container">
				<Card>
					<div className="inputs-container">
						<Input inputType="title" placeholder="제목을 입력해 주세요." />
						<Input inputType="body" placeholder="내용을 입력해 주세요." />
					</div>
				</Card>
			</div>
		</CreateMemoContainer>
	)
}
