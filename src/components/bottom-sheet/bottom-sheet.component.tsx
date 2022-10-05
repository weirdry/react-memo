import { ReactNode, MouseEvent } from 'react'

import IconButton from '../icon-button/icon-button.component'

import { BackgroundPannel, BottomSheetContainer } from './bottom-sheet.styles'

type BottomSheetProps = {
	title: string
	children?: ReactNode | null
	handleClose?: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void
}

export default function BottomSheet(props: BottomSheetProps) {
	const { title, children, handleClose } = props

	return (
		<>
			<BottomSheetContainer>
				<div className="heading-container">
					<h2>{title}</h2>
					<IconButton icon="close" handleClick={handleClose} />
				</div>
				<div className="items-container">{children}</div>
			</BottomSheetContainer>
			<BackgroundPannel onClick={handleClose} />
		</>
	)
}

BottomSheet.defaultProps = {
	title: '바텀시트 타이틀',
}
