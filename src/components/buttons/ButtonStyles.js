import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	// button styles
	normal: {
		width: '150px',
		height: '35px',
		color: props => props.textColor || 'black',
		backgroundColor: props => props.color || 'grey',
		cursor: 'pointer',
		outline: 'none',
		border: 'none',
		'&:hover': {
			backgroundColor: props => props.hover
		}
	},
	rounded: {
		width: '100%',
		display: 'block',
		minWidth: '60px',
		color: props => props.textColor || 'white',
		backgroundColor: props => props.color || 'grey',
		borderRadius: '25px',
		fontSize: '16px',
		fontWeight: '700',
		padding: '12px',
		'&:hover': {
			backgroundColor: props => props.hover
		}
	},
	authlink: {
		width: '130px',
		height: '40px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: props => props.color,
		padding: '8px 12px',
		borderRadius: '24px',
		fontSize: '16px',
		fontWeight: '700',
		zIndex: '1',
		position: 'absolute',
		top: '48px',
		left: '24px',
		'&:hover': {
			backgroundColor: props => props.hover
		},
		'&:active': {
			backgroundColor: props => props.active || '#dadada'
		},
		'&:focus': {
			boxShadow: '0 0 0 4px rgba(0, 132, 255, .5)',
			outline: 0
		}
	}
}));
