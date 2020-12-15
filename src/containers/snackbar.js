import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

const SlideTransition = props => {
	return <Slide {...props} direction="up" />;
};

export default function useSnackbar() {
	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left'
			}}
			open={state.open}
			autoHideDuration={3000}
			onClose={handleClose}
			message={message}
			TransitionComponent={state.transition}
		/>
	);
}
