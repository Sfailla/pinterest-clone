import React from 'react';
import { useContainerPosition, usePositioner } from 'masonic';
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

	return {
		positioner,
		offset,
		width,
		windowHeight,
		containerRef
	};
}

export default useMasonryGrid;
