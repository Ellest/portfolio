import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Home from './containers/Home';
import App from './containers/App';

export default (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			// will render the home component
			<IndexRoute component={Home}/>
		</Route>
	</Router>
);