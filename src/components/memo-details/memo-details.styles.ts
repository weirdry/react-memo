import styled from 'styled-components'

export const MemoDetailsContainer = styled.div`
	width: 100%;
	min-height: 16rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	word-wrap: break-word;
	word-break: keep-all;

	color: var(--colour-card-default-on-background-active);

	h1 {
		margin: 0.5rem 0;

		font-family: var(--typo-route-sectiontitle-font-family);
		font-weight: var(--typo-route-sectiontitle-font-weight);
		font-size: var(--typo-route-sectiontitle-font-size);
		line-height: var(--typo-route-sectiontitle-line-height);
	}
	span {
		color: var(--colour-card-default-on-background-inactive);

		font-family: var(--typo-card-caption-font-family);
		font-weight: var(--typo-card-caption-font-weight);
		font-size: var(--typo-card-caption-font-size);
		line-height: var(--typo-card-caption-line-height);
	}
	p {
		margin: 0.5rem 0;

		font-family: var(--typo-card-body-font-family);
		font-weight: var(--typo-card-body-font-weight);
		font-size: var(--typo-card-body-font-size);
		line-height: var(--typo-card-body-line-height);
	}
`
