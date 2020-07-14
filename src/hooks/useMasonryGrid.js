import React from 'react';
import {
	useContainerPosition,
	usePositioner,
	useScroller,
	useMasonry,
	MasonryScroller
} from 'masonic';
import { useWindowSize } from '@react-hook/window-size';

function useMasonryGrid(columnGutter = 15, columnWidth = 236) {
	const containerRef = React.useRef(null);
	const [ windowWidth, windowHeight ] = useWindowSize();

	const { offset, width } = useContainerPosition(containerRef, [
		windowWidth,
		windowHeight
	]);

	const positioner = usePositioner({
		width,
		columnGutter,
		columnWidth
	});

	const { scrollTop, isScrolling } = useScroller(offset);

	return {
		positioner,
		offset,
		width,
		windowHeight,
		containerRef,
		isScrolling,
		scrollTop,
		useMasonry,
		MasonryScroller
	};
}

export default useMasonryGrid;
