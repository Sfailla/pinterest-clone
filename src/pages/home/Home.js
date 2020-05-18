import * as React from 'react';
import { Masonry } from 'masonic';
import './masonic.css';

const styles = {
	card: {
		width: '236px',
		height: 'auto',
		borderRadius: '16px',
		backgroundColor: 'lightpink',
		padding: '2px 10px',
		overflow: 'hidden'
	}
};

const EasyMasonryComponent = ({ data, isLoading }) => {
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

	const MasonryCard = ({ data: { name, src } }) =>
		data && (
			<div style={styles.card}>
				<img src={src} className="img" alt="pix" />
				<span children={name} />
			</div>
		);

	const items = getGridItems();

	return (
		<div className="container">
			{isLoading ? (
				<Masonry
					items={items}
					columnGutter={10}
					columnWidth={236}
					overscanBy={2}
					render={MasonryCard}
				/>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default EasyMasonryComponent;
