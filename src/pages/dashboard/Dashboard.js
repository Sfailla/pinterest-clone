import React from 'react';
import firebase from '../../firebase/firebase';
import { useStyles } from './DashboardStyles';
import useFetch from '../../hooks/useFetch';

import Search from '../search/Search';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Header from '../../components/header/Header';
import { createGridItems } from './createGridItems';
import CardContext from './cardContext';

const SlideTransition = props => {
	return <Slide {...props} direction="up" />;
};

export default function Dashboard() {
	const classes = useStyles();

	const [ state, setState ] = React.useState({
		open: false,
		transition: SlideTransition
	});

	const [ message, setMessage ] = React.useState('');

	// handles opening the snackbar
	const handleOpen = React.useCallback(
		transition => {
			setState({
				open: true,
				transition
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

	const [ singleViewData, setSingleViewData ] = React.useState(null);
	const [ appData, setAppData ] = React.useState([]);
	const [ dataError, setDataError ] = React.useState(null);
	const [ page, setPage ] = React.useState('search');
	const [ query, setQuery ] = React.useState('cars');
	const url = 'https://api.unsplash.com/search/photos?';
	const params = {
		query,
		page: 1,
		per_page: 30,
		client_id: process.env.UNSPLASH_ACCESS_KEY
	};

	const { data, isDataLoading, updateParams, error } = useFetch(url, params);

	console.log(error);

	React.useEffect(
		() => {
			if (!isDataLoading) {
				setAppData(data);
			} else {
				setDataError('no search results found');
			}
		},
		[ appData, isDataLoading ]
	);

	const updateFetchResults = event => {
		event.preventDefault();
		updateParams(params);
	};

	const items = createGridItems(appData);

	console.count('dash_render');

	return (
		<React.Fragment>
			<CardContext.Provider value={{ setSingleViewData }}>
				<Header
					page={page}
					updateFetchResults={updateFetchResults}
					setQuery={setQuery}
					setPage={setPage}
				/>
				<div className={classes.root}>
					<h1 className={classes.title}>search for "{query}"</h1>
					{appData.length > 0 && (
						<Search
							setSingleViewData={setSingleViewData}
							page={page}
							isDataLoading={isDataLoading}
							setPage={setPage}
							items={items}
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
						TransitionComponent={state.transition}
					/>
				</div>
			</CardContext.Provider>
		</React.Fragment>
	);
}
