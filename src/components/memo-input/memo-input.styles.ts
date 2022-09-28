import styled from 'styled-components'

import '../../assets/tokens/variables.css'

export const InputsContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 2rem;
`

export const BaseTextarea = styled.textarea`
	all: unset;
	width: 100%;

	word-break: break-all;
	word-wrap: break-word;

	cursor: text;

	color: var(--colour-card-default-on-background-active);

	&::placeholder {
		color: var(--colour-card-default-on-background-inactive);
	}
`

export const TitleInput = styled(BaseTextarea)`
	height: auto;
	height: 1.875rem;

	font-family: var(--typo-route-sectiontitle-font-family);
	font-weight: var(--typo-route-sectiontitle-font-weight);
	font-size: var(--typo-route-sectiontitle-font-size);
	line-height: var(--typo-route-sectiontitle-line-height);
`

export const BodyTextarea = styled(BaseTextarea)`
	height: 100%;
	height: 1.5rem;

	font-family: var(--typo-card-body-font-family);
	font-weight: var(--typo-card-body-font-weight);
	font-size: var(--typo-card-body-font-size);
	line-height: var(--typo-card-body-line-height);
`
