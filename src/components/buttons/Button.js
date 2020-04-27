import React from 'react';

const Button = ({ name, ...otherProps }) => {
	return <button {...otherProps}>{name}</button>;
};

export default Button;
