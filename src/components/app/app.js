import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from '../../router/PrivateRoute';
import PublicRoute from '../../router/PublicRoute';

import Header from '../header/Header.js';
import HomePage from '../../pages/homepage/HomePage.js';
import Dashboard from '../../pages/dashboard/Dashboard';
import userAuth from '../user-auth/userAuth';

function App() {
	const [ page, setPage ] = React.useState('home');

	const user = userAuth();

	return (
		<BrowserRouter>
			<div className="app-container">
				{user && <Header page={page} setPage={setPage} />}
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
								setPage={setPage}
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
