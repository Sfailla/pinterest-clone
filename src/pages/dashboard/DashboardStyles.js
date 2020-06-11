import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		height: '100%',
		padding: theme.spacing(2)
	},
	title: {
		paddingBottom: theme.spacing(1)
	}
}));
