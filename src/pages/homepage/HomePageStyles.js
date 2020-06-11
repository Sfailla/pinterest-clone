import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	root: {
		width: '100vw',
		height: '100vh',
		padding: theme.spacing(4),
		overflow: 'hidden',
		'&:after': {
			content: '""',
			width: '100%',
			height: '100%',
			position: 'absolute',
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
			backgroundColor: 'rgba(0, 0, 0, 0.5)'
		},
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(3, 0)
		}
	}
}));
