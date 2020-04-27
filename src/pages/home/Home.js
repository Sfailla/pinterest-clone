import React from 'react';

function Home() {
	const [ collection, setCollection ] = React.useState(null);

	return (
		<div className="home">
			<h1>Home Feed</h1>
		</div>
	);
}

export default Home;
