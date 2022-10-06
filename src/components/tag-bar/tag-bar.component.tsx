import Chip from '../chip/chip.component'

import { TagBarContainer } from './tag-bar.styles'

export default function TagBar() {
	return (
		<TagBarContainer>
			<Chip chipType="all" />
			<Chip chipType="tag" />
			<Chip chipType="new" />
		</TagBarContainer>
	)
}
