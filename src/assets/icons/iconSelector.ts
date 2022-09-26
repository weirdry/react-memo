import { FC } from 'react'

import { ReactComponent as IconDefault } from './Icon-default.svg'
import { ReactComponent as IconCreate } from './Icon-create.svg'
import { ReactComponent as IconSelect } from './Icon-select.svg'

export type IconType = 'default' | 'create' | 'select'

const selectIcon = (iconType: IconType): FC => {
	switch (iconType) {
		case 'default':
			return IconDefault
		case 'create':
			return IconCreate
		case 'select':
			return IconSelect
		default:
			return IconDefault
	}
}

export default selectIcon
