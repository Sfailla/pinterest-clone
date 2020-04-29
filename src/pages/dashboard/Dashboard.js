import React from 'react';

import Home from '../../pages/home/Home';
import Boards from '../../pages/boards/Boards';

function Dashboard({ page }) {
	const [ appData, setAppData ] = React.useState(null);

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

	const renderComponent = () => {
		switch (page) {
			case 'home':
				return <Home data={appData} />;
			case 'boards':
				return <Boards />;
			default:
				return <Home />;
		}
	};

	console.log(appData);

	React.useEffect(() => {
		getInitialData();
	}, []);

	return <div className="dashboard">{renderComponent()}</div>;
}
export default Dashboard;
