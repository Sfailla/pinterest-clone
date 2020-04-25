import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import userAuth from '../user-auth/userAuth';
import PrivateRoute from '../../router/PrivateRoute';
import PublicRoute from '../../router/PublicRoute';

import Header from '../header/Header.js';
import HomePage from '../../pages/homepage/HomePage.js';
import Dashboard from '../../pages/dashboard/Dashboard';

function App() {
	const user = userAuth();
	console.log(!!user);

	return (
		<BrowserRouter>
			<div className="app-container">
				{user && <Header />}
				<div className="route-container">
					<Switch>
						<PublicRoute
							user={user}
							exact
							path="/"
							component={HomePage}
						/>
						{user && (
							<PrivateRoute
								user={user}
								path="/dashboard"
								component={Dashboard}
							/>
						)}
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
