import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from '../../router/PrivateRoute';
import PublicRoute from '../../router/PublicRoute';

import Header from '../header/Header.js';
import HomePage from '../../pages/homepage/HomePage.js';
import Dashboard from '../../pages/dashboard/Dashboard';
import userAuth from '../user-auth/userAuth';

function App() {
	const [ page, setPage ] = React.useState('home');
	const [ query, setQuery ] = React.useState('guns');

	const searchImages = async event => {
		event.preventDefault();

		console.log('it runs');

		const baseUrl = 'https://api.unsplash.com/search/photos?';
		const client_id = 'qoz2rrh6ChkvTtjYQapHD8P3cXZNi2ZDpG_CD7WBoOU';
		const urlParams = `&query=${query}&page=1&per_page=20&client_id=${client_id}`;
		const result = await fetch(`${baseUrl}${urlParams}`);
		const data = await result.json();

		console.log(data);
	};

	const user = userAuth();

	return (
		<Router>
			<div className="app-container">
				{user && (
					<Header
						page={page}
						searchImages={searchImages}
						setQuery={setQuery}
						setPage={setPage}
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
								query={query}
								setPage={setPage}
								component={Dashboard}
							/>
						)}
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
