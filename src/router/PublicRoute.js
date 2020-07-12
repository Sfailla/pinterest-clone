import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
	component: RouteComponent,
	user,
	...rest
}) => {
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
