import styled from 'styled-components'

import '../../assets/tokens/variables.css'

export const ToastContainer = styled.div`
	/* position: absolute;
	bottom: 3rem; */

	display: flex;
	align-items: center;
	gap: 1rem;

	padding: 1rem;
	border-radius: 1rem;

	background-color: var(--colour-container-default-background-active);
	box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.5);

	color: var(--colour-container-default-on-background-active);

	font-family: var(--typo-toast-body-font-family);
	font-weight: var(--typo-toast-body-font-weight);
	font-size: var(--typo-toast-body-font-size);
	line-height: var(--typo-toast-body-line-height);

	animation: disappear 0.25s ease-out 1.25s 1 normal both;

	* {
		fill: var(--colour-container-default-on-background-active);
	}

	@keyframes disappear {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
`
