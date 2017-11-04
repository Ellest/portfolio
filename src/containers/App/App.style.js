import styled from 'styled-components';

export const Background = styled.div`
	position: fixed;
	left: 10vw;
	width: 80vw;
	top: 10vh;
	height: 80vh;
	background-image: url(${require('assets/flicker.jpg')});
	background-color: yellow;
	background-repeat: no-repeat;
	background-position: center;
	z-index: -99;
`;