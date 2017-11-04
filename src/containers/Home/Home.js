import React, { Component, PropTypes } from 'react';
import {Container} from 'themes/grid'
import { Image, ImageDiv, Slider, Link } from 'containers/Home/Home.style'
import WhenInView from 'containers/Components/WhenInView/WhenInView'

class Home extends Component {
	static propTypes = {};

	render() {
		return (
			<Container>
				<ImageDiv>
					<h1>Elliot Yun</h1>
					<Link>aa</Link>
				</ImageDiv>
				<WhenInView>
					{/*
						Below is how you instantiate a "function" in react
						({ property }) seems to be the way to specify a function?
					*/}
					{({ isInView }) =>
						<Slider hide={!isInView}> 
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna 
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
							ullamco laboris nisi ut aliquip ex ea commodo consequat. 
							Duis aute irure dolor in reprehenderit in voluptate velit 
							esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
							occaecat cupidatat non proident, sunt in culpa qui officia 
							deserunt mollit anim id est laborum.
						</Slider>
					}
				</WhenInView>
			</Container>
		);
	}
}

export default Home;