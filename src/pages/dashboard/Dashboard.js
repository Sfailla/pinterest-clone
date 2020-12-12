import React from 'react';
import firebase from '../../firebase/firebase';
import { useStyles } from './DashboardStyles';
import useFetch from '../../hooks/useFetch';

import Home from '../../pages/home/Home';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Header from '../../components/header/Header';
import { createGridItems } from './createGridItems';

const SlideTransition = props => {
	return <Slide {...props} direction="up" />;
};

function Dashboard() {
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
	const handleOpen = React.useCallback(
		Transition => {
			setState({
				open: true,
				Transition
			});
		},
		[ setState ]
	);

	// handles closing the snackbar
	const handleClose = React.useCallback(
		(event, reason) => {
			if (reason === 'clickaway') {
				return;
			}
			setState({
				...state,
				open: false
			});
		},
		[ state, setState ]
	);

	// const addPinToBoard = async () => {
	// 	if (singleViewData) {
	// 		await firebase.db.collection('boards').add(singleViewData);
	// 		setPage('home');
	// 		setMessage('Added Pin To Board');
	// 	}
	// };

	const [ appData, setAppData ] = React.useState([]);
	const [ page, setPage ] = React.useState('home');
	const [ query, setQuery ] = React.useState('cars');
	const url = 'https://api.unsplash.com/search/photos?';
	const params = {
		query,
		page: 1,
		per_page: 20,
		client_id: process.env.UNSPLASH_ACCESS_KEY
	};

	const { data, isDataLoading, updateParams } = useFetch(url, params);

	React.useEffect(
		() => {
			if (!isDataLoading) {
				setAppData(data);
			}
		},
		[ data ]
	);

	const updateFetchResults = event => {
		event.preventDefault();
		updateParams(params);
	};

	const items = createGridItems(appData);

	console.count('dash_render');

	return (
		<React.Fragment>
			<Header
				page={page}
				updateFetchResults={updateFetchResults}
				setQuery={setQuery}
				setPage={setPage}
			/>
			<div className={classes.root}>
				<h1 className={classes.title}>images for "{query}"</h1>
				<Home
					setSingleViewData={setSingleViewData}
					page={page}
					isDataLoading={isDataLoading}
					setPage={setPage}
					items={items}
				/>
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
		</React.Fragment>
	);
}
export default Dashboard;
