import { FC } from 'react'

import { ReactComponent as ImagePlaceholderHome } from './img-placeholder-home.svg'

export type ImageType = 'homePlaceholder'

const selectImage = (imageType: ImageType): FC => {
	switch (imageType) {
		case 'homePlaceholder':
			return ImagePlaceholderHome
		default:
			return ImagePlaceholderHome
	}
}

export default selectImage
