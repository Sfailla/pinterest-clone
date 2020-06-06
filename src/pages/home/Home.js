import React from 'react';
import {
	MasonryScroller,
	useContainerPosition,
	usePositioner
} from 'masonic';
import MasonryCard from '../../components/grid/MasonryCard';
import { useWindowSize } from '@react-hook/window-size';
import './masonic.css';

const Home = ({ data }) => {
	const containerRef = React.useRef(null);
	const [ windowWidth, windowHeight ] = useWindowSize();

	const { offset, width } = useContainerPosition(containerRef, [
		windowWidth,
		windowHeight
	]);
	const positioner = usePositioner({
		width,
		columnGutter: 8,
		columnWidth: 220
	});

	const getGridItems = () => {
		const itemArr = [];
		const randInt = (min = 280, max = 500) =>
			Math.floor(Math.random() * (max - min)) + min;

		data &&
			data.map((res, i) => {
				itemArr.push({
					id: res.id,
					name: res.user.name,
					height: randInt(),
					src: res.urls.regular
				});
			});

		return itemArr;
	};

	const items = React.useMemo(() => getGridItems(), [ data ]);

	return (
		<div className="container">
			<div className="masonic">
				{items ? (
					<MasonryScroller
						positioner={positioner}
						// The distance in px between the top of the document and the top of the
						// masonry grid container
						offset={offset}
						// The height of the virtualization window
						height={windowHeight}
						// Forwards the ref to the masonry container element
						containerRef={containerRef}
						items={items}
						overscanBy={3}
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
