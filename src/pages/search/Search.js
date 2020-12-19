import React from 'react';

import { useStyles } from './SearchStyles';
import MasonryCard from '../../components/grid/MasonryCard';
import useMasonryGrid from '../../hooks/useMasonryGrid';
import Pagination from '@material-ui/lab/Pagination';

const Search = ({
  items,
  searchTerm,
  totalPages,
  paginate,
  setPaginate,
  updateParams,
}) => {
  const classes = useStyles();
  const {
    containerRef,
    windowHeight,
    offset,
    positioner,
    scrollTop,
    resizeObserver,
    MasonryScroller,
    useScrollToIndex,
  } = useMasonryGrid(items);

  const scrollToIndex = useScrollToIndex(positioner, {
    offset,
    height: windowHeight,
    align: 'center',
  });

  const handleChange = async (event, value) => {
    setPaginate(value);
    scrollToIndex(0);
    updateParams({
      query: searchTerm,
      page: value,
      per_page: 30,
      client_id: process.env.UNSPLASH_ACCESS_KEY,
    });
  };

  return (
    <div className={classes.search}>
      <h1 className={classes.title}>search results for "{searchTerm}"</h1>
      <div className={classes.masonic}>
        <MasonryScroller
          key={items.id}
          style={{ outline: 'none' }}
          positioner={positioner}
          offset={offset}
          scrollTop={scrollTop}
          height={windowHeight}
          containerRef={containerRef}
          resizeObserver={resizeObserver}
          items={items}
          overscanBy={3}
          render={MasonryCard}
        />
      </div>
      <div className={classes.paginateContainer}>
        <Pagination
          className={classes.paginate}
          page={paginate}
          count={totalPages}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default Search;
