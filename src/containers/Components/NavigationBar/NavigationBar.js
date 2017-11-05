import React, { Component, PropTypes } from 'react';
import { 
	IconContainer, 
	NavigationContainer, 
	NavigationItem, 
	MainContainer, 
	Icon,
	A
} from './NavigationBar.style';
import linkedinIcon from 'assets/linkedin2.png';
import octoCatIcon from 'assets/Octocat.png';

class NavigationBar extends Component {

	render() {
		return (
			<MainContainer>
				<IconContainer>
					<A href='https://linkedin.com/in/elliotyun' target="_blank">
						<Icon width='1.55em' src={linkedinIcon}/>
					</A>
					<A href='https://github.com/Ellest' target="_blank">
						<Icon width="1.85em" src={octoCatIcon}/>
					</A>
				</IconContainer>
				<NavigationContainer>
					<NavigationItem to="/">Home</NavigationItem>
					<NavigationItem to="/projects">Projects</NavigationItem>
					<NavigationItem to="/about">About</NavigationItem>
				</NavigationContainer>
			</MainContainer>
		);
	}
}

export default NavigationBar;