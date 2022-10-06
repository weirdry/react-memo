import styled from 'styled-components'

import { IconButtonContainer } from '../icon-button/icon-button.styles'

export const TagBarContainer = styled.div`
	width: 100%;
	overflow-x: scroll;

	display: flex;
	align-items: center;
	gap: 0.5rem;

	padding: 1rem 1rem 1.5rem 1rem;

	::-webkit-scrollbar {
		display: none;
	}

	${IconButtonContainer} {
		height: 2.5rem;
		width: 2.5rem;
	}

	* {
		flex-shrink: 0;
	}
`
