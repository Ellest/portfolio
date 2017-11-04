import styled from 'styled-components';
import { Flex, Div } from 'themes/grid'
import { Link } from 'react-router';

export const NavigationContainer = styled(Flex)`
	position: fixed;
	right: 0;
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