import React, { Component, PropTypes } from 'react';
import { NavigationContainer, NavigationItem } from './NavigationBar.style';

class NavigationBar extends Component {

	render() {
		return (
			<NavigationContainer>
				<NavigationItem to="/">Home</NavigationItem>
				<NavigationItem to="/projects">Projects</NavigationItem>
				<NavigationItem to="/about">About</NavigationItem>
			</NavigationContainer>
		);
	}
}

export default NavigationBar;