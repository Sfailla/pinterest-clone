import { makeStyles } from '@material-ui/core/styles';
import { mainBorderRadius } from '../../styles/variables/variables';

export const useStyles = makeStyles(theme => ({
	container: {
		width: '100%',
		height: '100%',
		display: 'grid',
		justifyContent: 'center',
		gridTemplateColumns: 'repeat(auto-fill, 236px)',
		gridAutoRows: '100px',
		gridGap: '10px'
	},
	box: {
		width: '100%',
		height: '100%',
		borderRadius: mainBorderRadius,
		background: props =>
			`url(${props.src}) no-repeat center top / cover`,
		gridRowEnd: props => `span ${props.size}`
	}
}));
