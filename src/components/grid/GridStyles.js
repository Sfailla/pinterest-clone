import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	container: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, 236px)',
		gridAutoRows: '100px',
		gridGap: '10px'
	}
}));
