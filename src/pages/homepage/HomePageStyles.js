import { makeStyles } from '@material-ui/core/styles';
import { mainBorderRadius } from '../../styles/variables/variables';

export const useStyles = makeStyles(theme => ({
	root: {
		width: '100vw',
		height: 'calc(100vh - 65px)',
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
	},
	container: {
		width: '100%',
		minHeight: '100vh'
	},
	masonCard: {
		width: '100%',
		height: props => props.height,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
		borderRadius: mainBorderRadius,
		background: props => `url(${props.src}) no-repeat center / cover`,
		transition: theme.transitions.create('transform')
		// '& span': {
		// 	width: '100%',
		// 	display: 'flex',
		// 	justifyContent: 'center',
		// 	alignItems: 'center',
		// 	background: 'rgb(161, 41, 41)',
		// 	color: theme.palette.common.white,
		// 	padding: theme.spacing(1),
		// 	letterSpacing: '3px',
		// 	borderBottomLeftRadius: '10px',
		// 	borderBottomRightRadius: '10px'
		// }
	}
}));
