import styled, {css} from 'styled-components';

export const Image = styled.img`
	width: 100%;
`;

export const ImageDiv = styled.div`
	height: 100vh;
	background-image: url('${require('../../assets/grass.jpg')}');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 10px;
	max-height: 700px;

	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: flex-start;

	//text-align: center;
	font-size: 0.8em;

	h1 {
		position: relative;
		top: 10%;
		left: 5%;
		margin-bottom: 0;
		color: #59543D;
	}

	h3 {
		margin-top: 5;
		color: #59543D;
		margin-left: 10px;
	}
`;

export const Slider = styled.p`
	position: relative;
	&:after {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: white;
		transform-origin: left;
		transform: rotateY(90deg);
		transition: transform 1s;
	}

	&:hover {

	}

	${({hide}) => hide && css`
		&:after {
			transform: rotateY(0deg);
		}
	`}
`;

export const Link = styled.a`
	font-color: white;
`;