import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import MemoInput from '../../components/memo-input/memo-input.component'

import { CreateMemoContainer } from './create-memo.styles'

export default function CreateMemo() {
	return (
		<CreateMemoContainer>
			<ToolBar
				isLeftSideOn
				leftSideChildren={<IconButton icon="backwards" />}
				rightSideChildren={<IconButton icon="confirm" />}
			/>
			<div className="input-container">
				<MemoInput />
			</div>
		</CreateMemoContainer>
	)
}
