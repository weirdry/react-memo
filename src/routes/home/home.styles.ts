import styled from 'styled-components'

export const HomeContainer = styled.div`
	width: 100%;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	/* padding: 0 var(--grid-app-margin); */

	.contents-container {
		width: 100%;
		gap: 1.5rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		padding-bottom: 6rem;
	}
`
