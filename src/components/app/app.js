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
	const [ query, setQuery ] = React.useState('guns');
	const [ page, setPage ] = React.useState('home');
	// const [ searchVal, setSearchVal ] = React.useState(query);

	const updateFetchResults = event => {
		event.preventDefault();
		updateParams({
			query,
			page: 1,
			per_page: 20,
			client_id: process.env.UNSPLASH_ACCESS_KEY
		});
	};

	const url = 'https://api.unsplash.com/search/photos?';
	const params = {
		query,
		page: 1,
		per_page: 20,
		client_id: process.env.UNSPLASH_ACCESS_KEY
	};

	const user = useAuth();
	const { data, isLoading, updateParams, refetch } = useFetch(
		url,
		params
	);

	return (
		<Router>
			<div className="app-container">
				{user && (
					<Header
						page={page}
						updateFetchResults={updateFetchResults}
						setQuery={setQuery}
						setPage={setPage}
						refetch={refetch}
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

						<PrivateRoute
							exact
							path="/dashboard"
							page={page}
							user={user}
							data={data}
							query={query}
							isLoading={isLoading}
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
