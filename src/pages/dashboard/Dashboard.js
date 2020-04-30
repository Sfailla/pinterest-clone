import React from 'react';
import firebase from '../../firebase/firebase';

import Home from '../../pages/home/Home';
import Boards from '../../pages/boards/Boards';
import ViewPin from '../../pages/view/ViewPin';

const INITIAL_VIEW_STATE = {
	id: '',
	img: '',
	author: '',
	authorLink: '',
	description: ''
};

function Dashboard({ setPage, page }) {
	const [ appData, setAppData ] = React.useState(null);
	const [ singleViewData, setSingleViewData ] = React.useState(
		INITIAL_VIEW_STATE
	);

	const baseUrl = 'https://api.unsplash.com/search/photos?';
	const client_id = 'qoz2rrh6ChkvTtjYQapHD8P3cXZNi2ZDpG_CD7WBoOU';

	const getInitialData = async () => {
		if (!appData) {
			const query = 'guns';
			const urlParams = `&query=${query}&page=1&per_page=20&client_id=${client_id}`;
			const result = await fetch(`${baseUrl}${urlParams}`);
			const data = await result.json();

			return setAppData(data.results);
		}
		return appData;
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
				return <ViewPin viewData={singleViewData} />;
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
		</div>
	);
}
export default Dashboard;
