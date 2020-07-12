import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
	component: RouteComponent,
	user,
	...rest
}) => {
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
