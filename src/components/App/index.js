import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='*'>
					<NotFound />
				</Route>
			</Switch>
		</Router>
	);
};
export default App;
