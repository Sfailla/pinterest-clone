import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({
	user,
	isLoading,
	redirect: pathname,
	component: Component,
	restricted = false,
	...restProps
}) {
	return (
		<Route
			{...restProps}
			render={props =>
				user && !restricted ? (
					<Component {...props} {...restProps} />
				) : (
					<Redirect to={{ pathname }} />
				)}
		/>
	);
}
