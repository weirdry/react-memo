import styled from 'styled-components'

export const SelectTagContainer = styled.form`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	.body-container {
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 2.5rem;

		padding: 2rem 1rem 1rem 1rem;

		h2 {
			color: var(--colour-container-default-on-background-inactive);

			font-family: var(--typo-route-sectiontitle-font-family);
			font-weight: var(--typo-route-sectiontitle-font-weight);
			font-size: var(--typo-route-sectiontitle-font-size);
			line-height: var(--typo-route-sectiontitle-line-height);
		}

		.tags-container {
			width: 100%;

			display: flex;
			gap: 0.5rem;
			flex-wrap: wrap;

			* {
				flex-grow: 0;
			}
		}
	}
`
