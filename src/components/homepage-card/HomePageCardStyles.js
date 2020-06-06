import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
	card: {
		width: '485px',
		height: '381px',
		backgroundColor: 'white',
		borderRadius: '10px',
		zIndex: '1',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)'
	},
	body: {
		margin: '40px 40px 24px 40px'
	},
	cardFooter: {
		height: '62px',
		color: '#111',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '14px',
		fontWeight: '700',
		webkitFontSmoothing: 'antialiased',
		borderTop: '1px solid #f2f2f2',
		borderBottomRightRadius: '10px',
		borderBottomLeftRadius: '10px'
	},
	logo: {
		width: '50px',
		height: '50px',
		margin: '0 auto'
	},
	textWrapper: {
		textAlign: 'center',

		'& h1': {
			margin: theme.spacing(1)
		},
		'& p': {
			fontSize: '16px',
			fontWeight: '400',
			marginBottom: theme.spacing(1)
		}
	}
}));
