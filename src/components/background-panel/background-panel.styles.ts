import styled from 'styled-components'

export const BackgroundPannelContainer = styled.div`
	width: 100vw;
	height: 100vh;

	position: absolute;
	top: 0;
	left: 0;

	z-index: 10;
	cursor: pointer;

	animation: pannel-animation 0.15s ease-in 1 forwards normal;

	@keyframes pannel-animation {
		0% {
			backdrop-filter: blur(0rem);
			background-color: rgba(0, 0, 0, 0);
		}
		100% {
			backdrop-filter: blur(1rem);
			background-color: rgba(0, 0, 0, 0.15);
		}
	}
`
