import React from 'react';

import MasonryCard from '../../components/grid/MasonryCard';
import { useStyles } from './SearchStyles';
import useMasonryGrid from '../../hooks/useMasonryGrid';

const Search = ({ items, searchTerm }) => {
	const classes = useStyles();
	const {
		containerRef,
		windowHeight,
		offset,
		positioner,
		resizeObserver,
		MasonryScroller
	} = useMasonryGrid(items);

	return (
		<div className={classes.search}>
			<h1 className={classes.title}>search results for "{searchTerm}"</h1>
			<div className={classes.masonic}>
				<MasonryScroller
					style={{ outline: 'none' }}
					positioner={positioner}
					offset={offset}
					height={windowHeight}
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
