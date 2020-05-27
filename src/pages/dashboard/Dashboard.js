import React from 'react';
import firebase from '../../firebase/firebase';

import Home from '../../pages/home/Home';
import ViewPin from '../../pages/view/ViewPin';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Boards from '../../pages/boards/Boards';

const SlideTransition = props => {
	return <Slide {...props} direction="up" />;
};

function Dashboard({ setPage, page, query }) {
	const [ appData, setAppData ] = React.useState(null);
	const [ isLoading, setIsLoading ] = React.useState(false);
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

	const getInitialData = async () => {
		const baseUrl = 'https://api.unsplash.com/search/photos?';
		const client_id = 'qoz2rrh6ChkvTtjYQapHD8P3cXZNi2ZDpG_CD7WBoOU';
		setIsLoading(true);

		if (appData === null) {
			const urlParams = `&query=${query}&page=1&per_page=20&client_id=${client_id}`;
			const result = await fetch(`${baseUrl}${urlParams}`);
			const data = await result.json();

			setAppData(data.results);
			setIsLoading(false);
			return appData;
		}
	};

	const addPinToBoard = async () => {
		if (singleViewData) {
			await firebase.db.collection('boards').add(singleViewData);
			setPage('home');
			setMessage('Added Pin To Board');
		}
	};

	const RenderComponent = () => {
		switch (page) {
			case 'home':
				return (
					appData && (
						<Home
							setSingleViewData={setSingleViewData}
							page={page}
							isLoading={isLoading}
							setPage={setPage}
							data={appData}
						/>
					)
				);
			case 'boards':
				return <Boards />;
			case 'view-pin':
				return (
					<ViewPin
						handleClick={handleClick}
						viewData={singleViewData}
						addPin={addPinToBoard}
						SlideTransition={SlideTransition}
					/>
				);
			default:
				return console.log('error in switch');
		}
	};

	React.useEffect(() => {
		getInitialData();
	}, []);

	return (
		<div className="dashboard">
			<h1>Dashboard</h1>
			{RenderComponent()}
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
