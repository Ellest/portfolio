import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Home from 'containers/Home/Home';
import App from 'containers/App/App';
import Projects from 'containers/Projects/Projects';

export default (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			// will render the home component
			<IndexRoute component={Home}/>
			<Route path="/projects" component={Projects}/>
		</Route>
	</Router>
);