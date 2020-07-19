import React from 'react';

import MasonryCard from './MasonryCard';
import { useStyles } from './HomeStyles';
import useMasonryGrid from '../../hooks/useMasonryGrid';

const Home = ({ data, query }) => {
	const classes = useStyles();

	const {
		containerRef,
		windowHeight,
		offset,
		positioner,
		MasonryScroller
	} = useMasonryGrid();

	const createGridItems = () => {
		const itemArray = [];
		const randomHeight = (min = 280, max = 500) =>
			Math.floor(Math.random() * (max - min)) + min;

		data &&
			data.map(res => {
				const items = {
					id: res.id,
					name: res.user.name,
					height: randomHeight(),
					src: res.urls.regular
				};

				itemArray.push(items);
			});

		return itemArray;
	};

	const items = React.useMemo(() => createGridItems(), [ data ]);

	return (
		<div className={classes.root}>
			<div className={classes.masonic}>
				<MasonryScroller
					key={items}
					positioner={positioner}
					// The distance in px between the top of the document and the top of the
					// masonry grid container
					offset={offset}
					// The height of the virtualization window
					height={windowHeight}
					// Forwards the ref to the masonry container element
					containerRef={containerRef}
					items={items}
					overscanBy={2}
					render={MasonryCard}
				/>
			</div>
		</div>
	);
};

export default Home;
