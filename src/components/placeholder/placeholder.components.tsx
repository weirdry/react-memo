import selectImage from '../../assets/images/imegeSelector'

import { PlaceholderContainer } from './placeholder.styles'

type PlaceholderProps = {
	placeholderType: keyof typeof PlaceholderImageType
	title: string
	body?: string
}

enum PlaceholderImageType {
	home = 'homePlaceholder',
}

export default function Placeholder(props: PlaceholderProps) {
	const { placeholderType, title, body } = props

	const PlaceholderImage = selectImage(PlaceholderImageType[placeholderType])

	return (
		<PlaceholderContainer>
			<PlaceholderImage />
			<div className="placeholder-texts-container">
				<h2>{title}</h2>
				{body && <span>{body}</span>}
			</div>
		</PlaceholderContainer>
	)
}

Placeholder.defaultProps = {
	placeholderType: 'home',
	title: '메모가 없습니다.',
}
