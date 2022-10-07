import styled from 'styled-components'

export const CreateTagContainer = styled.form`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	.body-container {
		width: 100%;
		max-width: 25rem;
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;

		padding: 2rem 1rem 1rem 1rem;

		span.symbol {
			height: 2rem;

			color: var(--colour-container-default-on-background-inactive);

			font-family: var(--typo-route-sectiontitle-font-family);
			font-weight: var(--typo-route-sectiontitle-font-weight);
			font-size: var(--typo-route-sectiontitle-font-size);
			line-height: var(--typo-route-sectiontitle-line-height);
		}

		.input-container {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			.guide-container {
				width: 100%;
				display: flex;
				justify-content: space-between;

				span {
					font-family: var(--typo-card-caption-font-family);
					font-weight: var(--typo-card-caption-font-weight);
					font-size: var(--typo-card-caption-font-size);
					line-height: var(--typo-card-caption-line-height);
				}

				span.count {
					text-align: right;
				}

				span.guide {
					color: var(--colour-system-inverted-on-background-active);
				}
			}
		}
	}
`
