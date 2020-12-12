import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from '../router';
import * as ROUTES from '../constants/Routes';

import HomePage from '../pages/homepage/HomePage.js';
import Dashboard from '../pages/dashboard/Dashboard';
import useAuth from '../hooks/useAuth';

import Loader from '../components/loader/Loader';

function App() {
	const { user, isAuthPending } = useAuth();

	return (
		<Router>
			{isAuthPending ? (
				<Loader />
			) : (
				<div className="app-container">
					<div className="route-container">
						<Switch>
							<PublicRoute
								exact
								path={ROUTES.HOME}
								component={HomePage}
								restricted={!!user}
								redirect={ROUTES.DASHBOARD}
							/>

							<PrivateRoute
								path={ROUTES.DASHBOARD}
								user={user}
								component={Dashboard}
								redirect={ROUTES.HOME}
							/>
						</Switch>
					</div>
				</div>
			)}
		</Router>
	);
}

export default App;
