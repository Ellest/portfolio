import styled from 'styled-components';
import { Flex, Div } from 'themes/grid'
import { Link } from 'react-router';

const linkedinIcon = (require('assets/flare.png'));

export const MainContainer = styled.div`
	padding-top:30px;
`;

export const IconContainer = styled(Flex)`
	position: fixed;
	left: 0;
	padding-left: 125px;
	z-index: 99;
`;

export const A = styled.a`
  margin: 0;
`;

export const Icon = styled.img`
	//width: 2em;
	@media(min-width: 708px){
		width: ${props => props.width};;
	}
	margin-left: 0.5em;
	filter: grayscale(100%);
	&:hover {
		color: black;
		filter: grayscale(0%);
	}
`;

export const NavigationContainer = styled(Flex)`
	position: fixed;
	right: 0;
	//padding-top: 20px;
	padding-right: 130px;
`;

export const NavigationItem = styled(Link)`
	margin-left: 20px;
	font-size: 1em;
	cursor: pointer;
	position: relative;
	color: black;
	text-decoration: none;

	&:hover {
		color: white;
		&:after {
			content: ' ';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height:100%;
			background-color: black;
			z-index: -1;

			/* This scales the pseudo element up.*/
			transform: scale(1.3);
		}
	}
`;