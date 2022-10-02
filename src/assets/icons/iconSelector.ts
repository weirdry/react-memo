import { FC } from 'react'

import { ReactComponent as IconDefault } from './Icon-default.svg'
import { ReactComponent as IconCreate } from './Icon-create.svg'
import { ReactComponent as IconSelect } from './Icon-select.svg'
import { ReactComponent as IconExpand } from './Icon-expand.svg'
import { ReactComponent as IconWrite } from './Icon-write.svg'
import { ReactComponent as IconSetting } from './Icon-setting.svg'
import { ReactComponent as IconBackwards } from './Icon-backward.svg'
import { ReactComponent as IconConfirm } from './Icon-confirm.svg'
import { ReactComponent as IconClose } from './Icon-close.svg'
import { ReactComponent as IconSuccess } from './Icon-success.svg'
import { ReactComponent as IconFailed } from './Icon-failed.svg'

export type IconType =
	| 'default'
	| 'create'
	| 'select'
	| 'expand'
	| 'write'
	| 'setting'
	| 'backwards'
	| 'confirm'
	| 'close'
	| 'success'
	| 'failed'

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
		case 'setting':
			return IconSetting
		case 'backwards':
			return IconBackwards
		case 'confirm':
			return IconConfirm
		case 'close':
			return IconClose
		case 'success':
			return IconSuccess
		case 'failed':
			return IconFailed
		default:
			return IconDefault
	}
}

export default selectIcon
