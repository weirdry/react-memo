import { ToggleContainer } from './toggle.styles'

type ToggleProps = {
	isActivated: boolean
}

export default function Toggle(props: ToggleProps) {
	const { isActivated } = props

	return (
		<ToggleContainer isActivated={isActivated}>
			<span className="handle" />
		</ToggleContainer>
	)
}
