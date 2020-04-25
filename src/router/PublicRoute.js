import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, user, ...rest }) => (
	<Route
		{...rest}
		component={props =>
			!!user ? (
				<Redirect to="/dashboard" />
			) : (
				<Component {...props} />
			)}
	/>
);

export default PublicRoute;
