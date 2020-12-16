import { makeStyles } from '@material-ui/core/styles';
import { mainBorderRadius } from '../../styles';

export const useStyles = makeStyles(theme => ({
	search: {
		width: '100%',
		height: '100vh',
		minHeight: '100%'
	},
	title: {
		padding: theme.spacing(2, 0)
	},
	masonic: {
		padding: theme.spacing(1, 3)
	},
	container: {
		width: '100%',
		minHeight: '100vh'
	},
	masonCard: {
		width: '100%',
		height: props => `${props.height}px`,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
		borderRadius: mainBorderRadius,
		background: props => `url(${props.src}) no-repeat center / cover`,
		transition: theme.transitions.create('transform'),
		'& span': {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			background: 'rgb(161, 41, 41)',
			color: theme.palette.common.white,
			padding: theme.spacing(1),
			letterSpacing: '3px',
			borderBottomLeftRadius: '10px',
			borderBottomRightRadius: '10px'
		}
	},
	button: {
		width: '100%',
		height: ({ height }) => `${height}px`,
		borderRadius: mainBorderRadius
	}
}));
