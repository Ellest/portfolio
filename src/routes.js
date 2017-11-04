import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import App from 'containers/App/App';
import Home from 'containers/Home/Home';
import Projects from 'containers/Projects/Projects';
import About from 'containers/About/About';

export default (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			// will render the home component
			<IndexRoute component={Home}/>
			<Route path="/projects" component={Projects}/>
			<Route path="/about" component={About}/>
		</Route>
	</Router>
);