import Card from '../card/card.component'
import Input from '../input/input.component'

import { InputsContainer } from './memo-input.styles'

export default function MemoInput() {
	return (
		<Card>
			<InputsContainer>
				<Input inputType="title" placeholder="제목을 입력해 주세요." />
				<Input inputType="body" placeholder="내용을 입력해 주세요." />
			</InputsContainer>
		</Card>
	)
}
