import { ReactComponent as IconDefault } from './Icon-default.svg'
import { ReactComponent as IconCreate } from './Icon-create.svg'
import { ReactComponent as IconSelect } from './Icon-select.svg'
import { FC } from 'react'

export const enum IconType {
	default = 'default',
	create = 'create',
	select = 'select',
}

const getIcon = (iconType = IconType.default): FC =>
	({
		[IconType.default]: IconDefault,
		[IconType.create]: IconCreate,
		[IconType.select]: IconSelect,
	}[iconType])

export default getIcon
