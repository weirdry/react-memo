import selectIcon from '../../assets/icons/iconSelector'

import { ToastContainer } from './toast.styles'

type ToastProps = {
	text: string
	toastType: 'success' | 'failed' | 'delete'
}

export default function Toast(props: ToastProps) {
	const { toastType, text } = props

	const SelectedIcon = selectIcon(toastType)

	return (
		<ToastContainer>
			<SelectedIcon />
			{text}
		</ToastContainer>
	)
}

Toast.defaultProps = {
	text: '토스트 메시지입니다.',
	toastType: 'success',
}
