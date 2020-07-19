import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PublicRoute = ({ component: RouteComponent, ...rest }) => {
	const user = useAuth();
	return (
		<Route
			{...rest}
			render={props =>
				!!user ? (
					<Redirect to="/dashboard" />
				) : (
					<RouteComponent {...props} {...rest} />
				)}
		/>
	);
};

export default PublicRoute;
