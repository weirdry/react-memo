import styled from 'styled-components'

import { IconButtonContainer } from '../icon-button/icon-button.styles'
import { ChipContainer } from '../chip/chip.styles'

export const TagBarContainer = styled.div`
	width: 100%;
	overflow-x: scroll;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;

	padding: 1rem 1rem 1.5rem 1rem;

	::-webkit-scrollbar {
		display: none;
	}

	${IconButtonContainer} {
		height: 2.5rem;
		width: 2.5rem;
		flex-shrink: 0;
	}

	${ChipContainer} {
		flex-shrink: 0;
	}
`
