import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import userAuth from '../user-auth/userAuth';

import Header from '../header/Header.js';
import HomePage from '../../pages/homepage/HomePage.js';
import Dashboard from '../../pages/dashboard/Dashboard';

const App = props => {
	const user = userAuth();

	const PrivateRoute = ({ component: Component, ...rest }) => {
		return (
			<Route
				{...rest}
				render={props =>
					!!user ? (
						<Component {...props} />
					) : (
						<Redirect
							to={{
								pathname: '/',
								state: { from: props.location }
							}}
						/>
					)}
			/>
		);
	};

	return (
		<BrowserRouter>
			<div className="app-container">
				{user && <Header />}
				<div className="route-container">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<PrivateRoute
							exact
							path="/dashboard"
							component={Dashboard}
						/>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
