import React from 'react';
import { useStyles } from './GridStyles';

const Box = ({ src, size, className, onClick }) => {
	const classes = useStyles({ src, size });
	return (
		<div
			className={`${classes.box} ${className}`}
			onClick={onClick}
		/>
	);
};

export default Box;
