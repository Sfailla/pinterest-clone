import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
	component: Component,
	page,
	user,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={props =>
				!!user ? (
					<Component {...props} page={page} />
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
