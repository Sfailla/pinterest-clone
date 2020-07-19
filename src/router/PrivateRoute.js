import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
	const user = useAuth();
	return (
		<Route
			{...rest}
			render={props =>
				!!user ? (
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
