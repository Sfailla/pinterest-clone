import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	card: {
		width: '485px',
		height: '360px',
		backgroundColor: theme.palette.common.white,
		borderRadius: '10px',
		zIndex: '1',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)'
	},
	cardBody: {
		margin: theme.spacing(5, 5, 3, 5)
	},
	cardFooter: {
		height: '62px',
		color: theme.palette.common.black,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: theme.typography.fontSize,
		fontWeight: theme.typography.fontWeightBold,
		webkitFontSmoothing: 'antialiased',
		borderTop: '1px solid #c2c2c2',
		borderBottomRightRadius: '10px',
		borderBottomLeftRadius: '10px'
	},
	logo: {
		width: '50px',
		height: '50px',
		margin: '0 auto'
	},
	textWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',

		'& h1': {
			margin: theme.spacing(1)
		},
		'& p': {
			fontSize: '16px',
			fontWeight: '400',
			marginBottom: theme.spacing(1)
		}
	},
	buttonWrapper: {
		margin: theme.spacing(1)
	}
}));
