import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../header/Header.js';
import HomePage from '../../pages/homepage/HomePage.js';

const App = () => {
	const user = null;

	return (
		<BrowserRouter>
			<div className="app-container">
				{user && <Header />}
				<div className="route-container">
					<Switch>
						<Route path="/" component={HomePage} />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
