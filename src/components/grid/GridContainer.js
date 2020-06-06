import React from 'react';
import { useStyles } from './GridStyles';

const GridContainer = ({ children }) => {
	const classes = useStyles();
	return <div className={classes.container}>{children}</div>;
};

export default GridContainer;
