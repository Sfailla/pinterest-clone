import React from 'react';

export const Button = ({ name, ...otherProps }) => {
	return <button {...otherProps}>{name}</button>;
};

export default Button;
