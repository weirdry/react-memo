import styled from '@emotion/styled'

import '../../assets/tokens/variables.css'

export const MemoListContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	padding: 1rem;

	h1 {
		font-family: var(--typo-route-sectiontitle-font-family);
		font-weight: var(--typo-route-sectiontitle-font-weight);
		font-size: var(--typo-route-sectiontitle-font-size);
		line-height: var(--typo-route-sectiontitle-line-height);
	}
`
