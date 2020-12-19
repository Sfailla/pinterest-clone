import React from 'react';
import {
  useContainerPosition,
  usePositioner,
  useResizeObserver,
  useScroller,
  useMasonry,
  Masonry,
  MasonryScroller,
  createPositioner,
  useScrollToIndex,
} from 'masonic';

import { useWindowSize } from '@react-hook/window-size';

function useMasonryGrid(items, columnGutter = 15, columnWidth = 236) {
  let containerRef = React.useRef(null);
  let [windowWidth, windowHeight] = useWindowSize();

  let { offset, width } = useContainerPosition(containerRef, [
    windowWidth,
    windowHeight,
  ]);

  let positioner = usePositioner(
    {
      width,
      columnGutter,
      columnWidth,
    },
    [items]
  );

  let resizeObserver = useResizeObserver(positioner);
  let { scrollTop, isScrolling } = useScroller(offset);

  return {
    positioner,
    offset,
    width,
    resizeObserver,
    windowHeight,
    containerRef,
    isScrolling,
    scrollTop,
    useMasonry,
    Masonry,
    MasonryScroller,
    useScrollToIndex,
  };
}

export default useMasonryGrid;
