import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	dashboard: {
		width: '100%',
		height: '100%',
		padding: theme.spacing(2)
	},
	title: {
		paddingBottom: theme.spacing(1)
	},
	alert: {
		'& .MuiAlert-action': {
			paddingLeft: 0,
			marginRight: '20px',
		}
	}
}));
