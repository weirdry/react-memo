import styled from 'styled-components'

export const SearchResultsContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	.tag-result-container {
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

		.tag-list {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem;
		}
	}
`
