import React, { useState } from 'react';

import Home from '../../pages/home/Home';
import Boards from '../../pages/boards/Boards';

function Dashboard({ page }) {
	const [ data, setData ] = React.useState(null);

	const baseUrl = 'https://api.unsplash.com/search/photos?';
	const client_id = 'qoz2rrh6ChkvTtjYQapHD8P3cXZNi2ZDpG_CD7WBoOU';

	const getInitialData = async () => {
		const result = await fetch(
			`${baseUrl}&query=random&page=1&client_id=${client_id}`
		);
		const data = await result.json();
		return setData(data.results);
	};

	const renderComponent = () => {
		return page === 'home' ? <Home data={data} /> : <Boards />;
	};

	React.useEffect(() => {
		getInitialData();
	}, []);

	return <div className="dashboard">{renderComponent()}</div>;
}
export default Dashboard;
