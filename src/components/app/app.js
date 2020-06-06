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
	const [ appData, setAppData ] = React.useState(null);
	const [ searchVal, setSearchVal ] = React.useState('guns');
	const [ isLoading, setIsLoading ] = React.useState(false);

	const handleGetAPIData = async query => {
		const baseUrl = 'https://api.unsplash.com/search/photos?';
		const client_id = 'qoz2rrh6ChkvTtjYQapHD8P3cXZNi2ZDpG_CD7WBoOU';
		setIsLoading(true);

		const urlParams = `&query=${query}&page=1&per_page=20&client_id=${client_id}`;
		const result = await fetch(`${baseUrl}${urlParams}`);
		const data = await result.json();

		setAppData(data.results);
		setIsLoading(false);
	};

	const searchImages = event => {
		event.preventDefault();
		setSearchVal(query);
	};

	const user = userAuth();

	React.useEffect(
		() => {
			handleGetAPIData(query);
		},
		[ searchVal ]
	);

	return (
		<Router>
			<div className="app-container">
				{user && (
					<Header
						page={page}
						searchImages={searchImages}
						setSearchVal={setSearchVal}
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
								data={appData}
								searchVal={searchVal}
								isLoading={isLoading}
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
