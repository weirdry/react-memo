import IconButton from '../icon-button/icon-button.component'
import Chip from '../chip/chip.component'

import { TagBarContainer } from './tag-bar.styles'

export default function TagBar() {
	return (
		<TagBarContainer>
			<IconButton isInverted icon="menu" size="sm" />

			<Chip chipType="all" isSelected />

			<Chip chipType="tag" />

			<Chip chipType="new" />
		</TagBarContainer>
	)
}
