import React from 'react';
import { useMasonry, MasonryScroller } from 'masonic';
import MasonryCard from './MasonryCard';
import { useStyles } from './HomeStyles';
import useMasonryGrid from '../../hooks/useMasonryGrid';

const Home = ({ data, isLoading, query }) => {
	const classes = useStyles();

	const {
		containerRef,
		windowHeight,
		offset,
		positioner
	} = useMasonryGrid();

	function ItemArray(id, name, height, src) {
		this.id = id;
		this.name = name;
		this.height = height;
		this.src = src;
	}

	const createGridItems = () => {
		const itemArray = [];
		const randomHeight = (min = 280, max = 500) =>
			Math.floor(Math.random() * (max - min)) + min;

		data &&
			data.map(res => {
				const items = new ItemArray(
					res.id,
					res.user.name,
					randomHeight(),
					res.urls.regular
				);

				itemArray.push(items);
			});

		return itemArray;
	};

	console.count('home_rendered');

	const items = React.useMemo(() => createGridItems(), [ data ]);

	return (
		<div className={classes.root}>
			<div className={classes.masonic}>
				<MasonryScroller
					key={query}
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
