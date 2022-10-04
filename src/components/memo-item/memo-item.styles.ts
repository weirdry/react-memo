import styled from 'styled-components'

export const ContentContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: var(--spacing-card-container);

	word-wrap: break-word;
	word-break: break-all;

	h3 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;

		overflow: hidden;
		text-overflow: ellipsis;

		color: var(--colour-card-default-on-background-active);
		font-family: var(--typo-card-title-font-family);
		font-weight: var(--typo-card-title-font-weight);
		font-size: var(--typo-card-title-font-size);
		line-height: var(--typo-card-title-line-height);
	}

	p {
		max-height: 3rem;

		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;

		overflow: hidden;
		text-overflow: ellipsis;

		color: var(--colour-card-default-on-background-active);
		font-family: var(--typo-card-body-font-family);
		font-weight: var(--typo-card-body-font-weight);
		font-size: var(--typo-card-body-font-size);
		line-height: var(--typo-card-body-line-height);
	}

	span {
		color: var(--colour-card-default-on-background-inactive);
		font-family: var(--typo-card-caption-font-family);
		font-weight: var(--typo-card-caption-font-weight);
		font-size: var(--typo-card-caption-font-size);
		line-height: var(--typo-card-caption-line-height);
	}
`
