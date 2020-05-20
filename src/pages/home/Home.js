import * as React from 'react';
import { Masonry } from 'masonic';
import './masonic.css';

const Home = ({ data, isLoading }) => {
	const getGridItems = () => {
		const gridItems = [];

		data &&
			data.map((res, i) => {
				return gridItems.push({
					id: i + 1,
					name: res.user.name,
					src: res.urls.regular
				});
			});

		return gridItems;
	};

	const MasonryCard = ({ data: { name, src } }) => (
		<div className="mason-card">
			<img src={src} className="img" alt="pix" />
			<span children={name.toUpperCase()} />
		</div>
	);

	const items = getGridItems();
	console.count('home_rendered');

	return (
		<div className="container">
			{!isLoading ? (
				<Masonry
					columnWidth={236}
					columnGutter={10}
					overscanBy={2}
					items={items}
					className="grid-item-card"
					render={MasonryCard}
				/>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default Home;
