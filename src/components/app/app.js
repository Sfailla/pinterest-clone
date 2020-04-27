import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from '../../router/PrivateRoute';
import PublicRoute from '../../router/PublicRoute';

import Header from '../header/Header.js';
import HomePage from '../../pages/homepage/HomePage.js';
import Dashboard from '../../pages/dashboard/Dashboard';

function App({ user }) {
	const [ activeLink, setActiveLink ] = React.useState('home');
	const [ page, setPage ] = React.useState('home');
	return (
		<BrowserRouter>
			<div className="app-container">
				{user && (
					<Header
						setPage={setPage}
						activeLink={activeLink}
						setActiveLink={setActiveLink}
					/>
				)}
				<div className="route-container">
					<Switch>
						<PublicRoute
							exact
							path="/"
							user={user}
							component={HomePage}
						/>

						{user && (
							<PrivateRoute
								exact
								path="/dashboard"
								page={page}
								user={user}
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
