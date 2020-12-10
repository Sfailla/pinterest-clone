import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../router/PrivateRoute';

import Header from '../components/header/Header.js';
import HomePage from '../pages/homepage/HomePage.js';
import Dashboard from '../pages/dashboard/Dashboard';
import useAuth from '../hooks/useAuth';
import useFetch from '../hooks/useFetch';

function App() {
	const [ query, setQuery ] = React.useState('cars');
	const [ page, setPage ] = React.useState('home');

	const url = 'https://api.unsplash.com/search/photos?';
	const params = {
		query,
		page: 1,
		per_page: 20,
		client_id: process.env.UNSPLASH_ACCESS_KEY
	};

	const { data, isDataLoading, updateParams } = useFetch(url, params);
	const { user, isAuthPending } = useAuth();

	const updateFetchResults = event => {
		event.preventDefault();
		updateParams(params);
	};

	return (
		<Router>
			<div className="app-container">
				{user && (
					<Header
						page={page}
						updateFetchResults={updateFetchResults}
						setQuery={setQuery}
						setPage={setPage}
					/>
				)}

				<div className="route-container">
					<Switch>
						<Route
							exact
							path="/"
							user={user}
							render={() =>
								isAuthPending || user ? <Redirect to="/dashboard" /> : <HomePage />}
						/>

						<PrivateRoute
							exact
							path="/dashboard"
							page={page}
							data={data}
							query={query}
							user={user}
							isLoading={isAuthPending}
							isDataLoading={isDataLoading}
							setPage={setPage}
							component={Dashboard}
						/>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
