import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ user, isLoading, component: RouteComponent, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				isLoading || user ? (
					<RouteComponent {...props} {...rest} />
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
