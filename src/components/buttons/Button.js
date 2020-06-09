import React from 'react';
import { useStyles } from './ButtonStyles';

const Button = ({
	name,
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
			{name}
		</button>
	);
};

export default Button;
