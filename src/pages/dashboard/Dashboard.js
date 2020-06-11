import React from 'react';
import firebase from '../../firebase/firebase';
import { useStyles } from './DashboardStyles';

import Home from '../../pages/home/Home';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
// import Boards from '../../pages/boards/Boards';
// import ViewPin from '../../pages/view/ViewPin';

const SlideTransition = props => {
	return <Slide {...props} direction="up" />;
};

function Dashboard({ setPage, page, searchVal, isLoading, data }) {
	const classes = useStyles();

	const [ singleViewData, setSingleViewData ] = React.useState({
		img: '',
		author: '',
		authorLink: '',
		description: ''
	});
	const [ state, setState ] = React.useState({
		open: false,
		Transition: SlideTransition
	});
	const [ message, setMessage ] = React.useState('');

	// handles opening the snackbar
	const handleClick = Transition => {
		setState({
			open: true,
			Transition
		});
	};

	// handles closing the snackbar
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setState({
			...state,
			open: false
		});
	};

	const addPinToBoard = async () => {
		if (singleViewData) {
			await firebase.db.collection('boards').add(singleViewData);
			setPage('home');
			setMessage('Added Pin To Board');
		}
	};

	console.count('dash_render');

	// const RenderComponent = () => {
	// 	switch (page) {
	// 		case 'boards':
	// 			return <Boards />;
	// 		case 'view-pin':
	// 			return (
	// 				<ViewPin
	// 					handleClick={handleClick}
	// 					viewData={singleViewData}
	// 					addPin={addPinToBoard}
	// 					SlideTransition={SlideTransition}
	// 				/>
	// 			);
	// };

	return (
		<div className={classes.root}>
			<h1 className={classes.title}>images for "{searchVal}"</h1>
			{!isLoading && (
				<Home
					setSingleViewData={setSingleViewData}
					page={page}
					setPage={setPage}
					data={data}
				/>
			)}
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left'
				}}
				open={state.open}
				autoHideDuration={3000}
				onClose={handleClose}
				message={message}
				TransitionComponent={state.Transition}
			/>
		</div>
	);
}
export default Dashboard;
