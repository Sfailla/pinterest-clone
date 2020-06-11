import React from 'react';
import { useStyles } from './HomeStyles';

const MasonryCard = ({ data: { name, src, height } }) => {
	const classes = useStyles({ src, height });
	return (
		<div className={classes.masonCard}>
			<span children={name.toUpperCase()} />
		</div>
	);
};

export default MasonryCard;
