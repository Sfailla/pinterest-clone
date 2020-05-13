import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
	component: Component,
	setPage,
	page,
	query,
	user,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={props =>
				!!user ? (
					<Component
						{...props}
						query={query}
						setPage={setPage}
						page={page}
					/>
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

export default PrivateRoute;
