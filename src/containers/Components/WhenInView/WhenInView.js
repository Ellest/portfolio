import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class WhenInView extends Component {
	
	/* 
		constructor for class 
	*/
	constructor(props){
		super(props) 
		this.state = {
			isInView: false
		};

		this.onEnter = this.onEnter.bind(this);
	}

	/* 
		Parameter passed in to this fuction is an object. previousPosition 
		is a property on that obj
	*/
	onEnter({ previousPosition }) {
		if (previousPosition === Waypoint.below){
			this.setState({
				isInView: true
			});
		}
	}

	render() {
		return (
			<div>
				<Waypoint onEnter={this.onEnter}></Waypoint>
				{this.props.children({ isInView: this.state.isInView })}
			</div>
		);
	}
}

export default WhenInView;