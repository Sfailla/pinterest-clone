import React from 'react';
import {
	MasonryScroller,
	useContainerPosition,
	usePositioner
} from 'masonic';
import MasonryCard from './MasonryCard';
import { useWindowSize } from '@react-hook/window-size';
import { useStyles } from './HomeStyles';

const Home = ({ data, isLoading, query }) => {
	const classes = useStyles();
	const containerRef = React.useRef(null);
	const [ windowWidth, windowHeight ] = useWindowSize();

	const { offset, width } = useContainerPosition(containerRef, [
		windowWidth,
		windowHeight
	]);

	const positioner = usePositioner({
		width,
		columnGutter: 15,
		columnWidth: 236
	});

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
				{!isLoading ? (
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
				) : (
					<div>Loading...</div>
				)}
			</div>
		</div>
	);
};

export default Home;
