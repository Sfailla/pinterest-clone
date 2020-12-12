import React from 'react';
import { useStyles } from './ButtonStyles';

const Button = ({
	children,
	variant,
	color,
	textColor,
	active,
	hover,
	...otherProps
}) => {
	const classes = useStyles({ color, hover, active, textColor });

	return (
		<button className={classes[variant]} {...otherProps}>
			{children}
		</button>
	);
};

export default Button;
