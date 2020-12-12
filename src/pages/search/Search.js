import React from 'react';

import MasonryCard from './MasonryCard';
import { useStyles } from './SearchStyles';
import useMasonryGrid from '../../hooks/useMasonryGrid';

const Search = ({ items }) => {
	const classes = useStyles();
	// const CardWithClick = React.useCallback(props => {
	// 	return <MasonryCard {...props} onClick={() => setSingleViewData(props.data)} />;
	// }, []);

	const {
		containerRef,
		windowHeight,
		offset,
		positioner,
		resizeObserver,
		MasonryScroller
	} = useMasonryGrid(items);

	return (
		<div className={classes.root}>
			<div className={classes.masonic}>
				<MasonryScroller
					style={{ outline: 'none' }}
					// masonry grid container
					// The distance in px between the top of the document and the top of the
					positioner={positioner}
					offset={offset}
					// The height of the virtualization window
					height={windowHeight}
					// Forwards the ref to the masonry container element
					containerRef={containerRef}
					resizeObserver={resizeObserver}
					items={items}
					overscanBy={3}
					render={MasonryCard}
				/>
			</div>
		</div>
	);
};

export default Search;
