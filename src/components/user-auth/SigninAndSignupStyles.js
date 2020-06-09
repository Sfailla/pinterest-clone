import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
	authCard: {
		width: '484px',
		minHeight: '584px',
		backgroundColor: 'white',
		borderRadius: '10px',
		zIndex: '1',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)'
	},
	cardBody: {
		minHeight: '400px',
		padding: '20px 10px 24px'
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
		width: '45px',
		height: '45px',
		margin: '0 auto'
	},
	textWrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',

		'& h3': {
			color: 'rgb(51, 51, 51)',
			fontSize: '36px',
			fontWeight: '600',
			webkitFontSmoothing: 'antialiased',
			margin: '0px auto 18px',
			width: '400px'
		},
		'& p': {
			color: 'rgb(51, 51, 51)',
			fontSize: '16px',
			fontWeight: 'normal',
			marginTop: '-15px',
			marginBottom: '32px'
		}
	},
	policy: {
		marginTop: theme.spacing(2),
		textAlign: 'center',

		'& p:first-child': {
			width: '224px',
			fontSize: '11px',
			fontWeight: 'normal',
			textAlign: 'center',
			color: 'rgb(142, 142, 142)',
			margin: '0 auto'
		}
	},
	boldText: {
		color: '#3b3939',
		fontWeight: 'bold'
	},
	memberLink: {
		textAlign: 'center',
		display: 'block',
		marginTop: '12px',
		'& a': {
			textDecoration: 'none',
			color: 'rgb(51, 51, 51)',
			cursor: 'pointer'
		}
	},
	wrapper: {
		width: '268px',
		margin: '0 auto',
		paddingTop: theme.spacing(1)
	},
	buttonWrapper: {
		margin: theme.spacing(1)
	},
	googleButton: {
		color: 'black'
	}
}));
