import { FC } from 'react'

import { ReactComponent as IconDefault } from './Icon-default.svg'
import { ReactComponent as IconCreate } from './Icon-create.svg'
import { ReactComponent as IconSelect } from './Icon-select.svg'
import { ReactComponent as IconExpand } from './Icon-expand.svg'
import { ReactComponent as IconWrite } from './Icon-write.svg'

export type IconType = 'default' | 'create' | 'select' | 'expand' | 'write'

const selectIcon = (iconType: IconType): FC => {
	switch (iconType) {
		case 'default':
			return IconDefault
		case 'create':
			return IconCreate
		case 'select':
			return IconSelect
		case 'expand':
			return IconExpand
		case 'write':
			return IconWrite
		default:
			return IconDefault
	}
}

export default selectIcon
