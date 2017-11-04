import React, { Component } from 'react';
import logo from 'logo.svg';
import 'App.css';
import { Background } from 'containers/App/App.style'
import NavigationBar from 'containers/Components/NavigationBar/NavigationBar'

/*
	App is for the entire "app" as the tile suggests.
	Adding elements here will append 
*/

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
      	{/* This basically renders the "child" or specific elements at each route */}
        {this.props.children}
      </div>
    );
  }
}

export default App;
