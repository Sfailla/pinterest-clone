import React from 'react';
import firebase from '../../firebase/firebase';

import Home from '../../pages/home/Home';
import Boards from '../../pages/boards/Boards';
import ViewPin from '../../pages/view/ViewPin';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

const INITIAL_VIEW_STATE = {
	id: '',
	img: '',
	author: '',
	authorLink: '',
	description: ''
};

const SlideTransition = props => {
	return <Slide {...props} direction="up" />;
};

function Dashboard({ setPage, page }) {
	const [ appData, setAppData ] = React.useState(null);
	const [ singleViewData, setSingleViewData ] = React.useState(
		INITIAL_VIEW_STATE
	);
	const [ state, setState ] = React.useState({
		open: false,
		Transition: SlideTransition
	});
	const [ message, setMessage ] = React.useState('');

	const handleClick = Transition => {
		setState({
			open: true,
			Transition
		});
	};

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

		if (!appData) {
			const query = 'guns';
			const urlParams = `&query=${query}&page=1&per_page=20&client_id=${client_id}`;
			const result = await fetch(`${baseUrl}${urlParams}`);
			const data = await result.json();

			return setAppData(data.results);
		}
		return appData;
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
					<Home
						setSingleViewData={setSingleViewData}
						page={page}
						setPage={setPage}
						data={appData}
					/>
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
				return <Home data={appData} />;
		}
	};

	React.useEffect(() => {
		getInitialData();
	}, []);

	return (
		<div className="dashboard">
			<RenderComponent />
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left'
				}}
				open={state.open}
				TransitionComponent={state.Transition}
				autoHideDuration={3000}
				onClose={handleClose}
				message={message}
			/>
		</div>
	);
}
export default Dashboard;
