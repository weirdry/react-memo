import styled from 'styled-components'

export const InputTagContainer = styled.input`
	all: unset;
	width: 100%;
	height: auto;

	cursor: text;

	color: var(--colour-card-default-on-background-active);

	font-family: var(--typo-route-sectiontitle-font-family);
	font-weight: var(--typo-route-sectiontitle-font-weight);
	font-size: var(--typo-route-sectiontitle-font-size);
	line-height: var(--typo-route-sectiontitle-line-height);

	&::placeholder {
		color: var(--colour-card-default-on-background-inactive);
	}

	-webkit-user-select: text;
	-moz-user-select: text;
	-ms-user-select: text;
	user-select: text;
`
