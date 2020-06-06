import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	root: {
		width: '100vw',
		height: '100vh',
		padding: '30px',
		overflow: 'hidden',
		'&:after': {
			width: '100%',
			height: '100%',
			content: '""',
			position: 'absolute',
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
			backgroundColor: 'rgba(0, 0, 0, 0.5)'
		},
		[theme.breakpoints.down('sm')]: {
			padding: '20px 0px'
		}
	},
	box: {
		width: '100%',
		height: '100%',
		borderRadius: '16px' // var(--card-border-radius)
	},
	boxSmall: {
		gridRowEnd: 'span 2'
	},
	boxMedium: {
		gridRowEnd: 'span 3'
	},
	boxLarge: {
		gridRowEnd: 'span 4'
	}
}));
