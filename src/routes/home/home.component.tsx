import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'
import { ReactComponent as CreateIcon } from '../../assets/icons/Icon-create.svg'
import { ReactComponent as SelectIcon } from '../../assets/icons/Icon-select.svg'

import { HomeContainer } from './home.styles'

export default function Home() {
	return (
		<HomeContainer>
			<ToolBar title="MEMOWISE">
				<IconButton icon={<CreateIcon />} />
				<IconButton icon={<SelectIcon />} />
			</ToolBar>
		</HomeContainer>
	)
}
