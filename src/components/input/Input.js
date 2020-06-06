import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	input: {
		minHeight: '48px',
		padding: '8px 16px',
		width: '100%',
		fontSize: '16px',
		color: '#111',
		backgroundColor: 'white',
		border: '2px solid #ddd',
		borderRadius: '16px',
		marginBottom: '7px',

		'&:focus': {
			boxShadow: '0 0 0 4px rgba(0, 132, 255, .5)',
			outline: '0'
		}
	}
}));

const Input = ({ ...otherProps }) => {
	const classes = useStyles();
	return <input className={classes.input} {...otherProps} />;
};

export default Input;
