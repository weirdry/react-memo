import ToolBar from '../../components/tool-bar/tool-bar.component'
import IconButton from '../../components/icon-button/icon-button.component'

import { IconType } from '../../assets/icons/iconSelector'

import { HomeContainer } from './home.styles'

export default function Home() {
	return (
		<HomeContainer>
			<ToolBar title="MEMOWISE">
				<IconButton icon={IconType.create} />
				<IconButton icon={IconType.select} />
			</ToolBar>
		</HomeContainer>
	)
}
