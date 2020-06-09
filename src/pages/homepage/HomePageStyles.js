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
	},
	authlinkButton: {
		width: '130px',
		height: '40px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#efefef',
		padding: '8px 12px',
		borderRadius: '24px',
		fontSize: '16px',
		fontWeight: '700',
		zIndex: '1',
		position: 'absolute',
		top: '48px',
		left: '24px',
		'&:hover': {
			backgroundColor: '#e2e2e2'
		},
		'&:active': {
			backgroundColor: '#dadada'
		},
		'&:focus': {
			boxShadow: '0 0 0 4px rgba(0, 132, 255, .5)',
			outline: 0
		}
	}
}));
