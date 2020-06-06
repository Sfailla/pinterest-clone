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
		columnGutter: 15,
		columnWidth: 236
	});

	const formatGridItems = () => {
		const itemArr = [];
		const randomHeight = (min = 280, max = 500) =>
			Math.floor(Math.random() * (max - min)) + min;

		data &&
			data.map(res => {
				itemArr.push({
					id: res.id,
					name: res.user.name,
					height: randomHeight(),
					src: res.urls.regular
				});
			});

		return itemArr;
	};

	console.count('home_rendered');

	const items = React.useMemo(() => formatGridItems(), [ data ]);

	return (
		<div className="container">
			<div className="masonic">
				{data ? (
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
