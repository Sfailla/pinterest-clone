import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from '../../router/PrivateRoute';
import PublicRoute from '../../router/PublicRoute';

import Header from '../header/Header.js';
import HomePage from '../../pages/homepage/HomePage.js';
import Dashboard from '../../pages/dashboard/Dashboard';
import useAuth from '../../hooks/useAuth';
import useFetch from '../../hooks/useFetch';

function App() {
	const [ query, setQuery ] = React.useState('cars');
	const [ page, setPage ] = React.useState('home');
	const [ userAuth, setUserAuth ] = React.useState(
		JSON.parse(localStorage.getItem('userAuth'))
	);

	const url = 'https://api.unsplash.com/search/photos?';
	const params = {
		query,
		page: 1,
		per_page: 20,
		client_id: process.env.UNSPLASH_ACCESS_KEY
	};

	const { data, isDataLoading, updateParams, refetch } = useFetch(
		url,
		params
	);
	const { user, isAuthPending } = useAuth();

	const updateFetchResults = event => {
		event.preventDefault();
		updateParams(params);
	};

	if (isDataLoading || isAuthPending) return <div>Loading...</div>;

	return (
		<Router>
			<div className="app-container">
				{user && (
					<Header
						page={page}
						updateFetchResults={updateFetchResults}
						setQuery={setQuery}
						setPage={setPage}
						setUserAuth={setUserAuth}
						refetch={refetch}
					/>
				)}
				<div className="route-container">
					<Switch>
						<PublicRoute
							exact
							path="/"
							user={user}
							userAuth={userAuth}
							component={HomePage}
						/>

						<PrivateRoute
							exact
							path="/dashboard"
							page={page}
							data={data}
							query={query}
							user={user}
							userAuth={userAuth}
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
