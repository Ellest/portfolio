import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

import 'themes/styles';

ReactDOM.render(
	routes, 
	document.getElementById('root')
);
registerServiceWorker();
