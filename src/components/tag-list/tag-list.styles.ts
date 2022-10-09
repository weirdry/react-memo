import styled from 'styled-components'

type TagListContainerProps = {
	isEditable: boolean
}

export const TagListContainer = styled.div<TagListContainerProps>`
	width: 100%;

	display: flex;
	align-items: center;
	gap: 0.5rem;
	flex-wrap: wrap;

	padding: ${(props) =>
		props.isEditable ? `1rem 0 1.5rem 0` : `0.5rem 0 0 0`};

	* {
		flex-shrink: 0;
	}
`
