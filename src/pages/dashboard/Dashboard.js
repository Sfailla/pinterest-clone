import React from 'react';
import firebase from '../../firebase/firebase';
import { useStyles } from './DashboardStyles';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';

import Search from '../search/Search';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Header from '../../components/header/Header';
import { createGridItems } from './createGridItems';
import CardContext from './cardContext';
import validateSearch from '../../utils/form-validation/validateSearch';

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

	const { handleOnChange, handleOnSubmit, values, errors } = useForm(
		{ search: '' },
		validateSearch,
		authorize
	);

	const params = {
		query: values.search || 'cars',
		page: 1,
		per_page: 30,
		client_id: process.env.UNSPLASH_ACCESS_KEY
	};

	const { data, isDataLoading, updateParams, error } = useFetch(
		'https://api.unsplash.com/search/photos?',
		params
	);

	const [ singleViewData, setSingleViewData ] = React.useState(null);
	const [ appData, setAppData ] = React.useState([]);
	const [ page, setPage ] = React.useState('search');

	React.useEffect(
		() => {
			if (!isDataLoading && !error) {
				setAppData(data);
			} else if (error) {
				// setSearchError(error);
			}
		},
		[ appData, isDataLoading ]
	);

	function authorize() {
		updateParams(params);
	}

	const items = createGridItems(appData);

	console.count('dash_render');

	return (
		<React.Fragment>
			<CardContext.Provider value={{ setSingleViewData }}>
				<Header
					page={page}
					setPage={setPage}
					handleOnChange={handleOnChange}
					handleOnSubmit={handleOnSubmit}
				/>
				<div className={classes.root}>
					<h1 className={classes.title}>search for "{'cars'}"</h1>
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
