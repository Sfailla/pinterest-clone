import React from 'react';
import images from '../../pages/homepage/images';
import useMasonryGrid from '../../hooks/useMasonryGrid';
import { useStyles } from '../../pages/homepage/HomePageStyles';

function MasonicGrid() {
  const {
    positioner,
    containerRef,
    scrollTop,
    windowHeight,
    useMasonry,
  } = useMasonryGrid(null, 20, 236);

  const classes = useStyles();
  const items = React.useMemo(() => getItems(), [images]);

  return (
    <div className={classes.root}>
      {useMasonry({
        positioner,
        scrollTop,
        height: windowHeight,
        containerRef,
        items,
        overscanBy: 2,
        render: ImageCard,
      })}
    </div>
  );
}

export default MasonicGrid;

const ImageCard = ({ data: { src, height } }) => {
  const classes = useStyles({ src, height });
  return <div className={classes.masonCard} />;
};

const randomChoice = items => items[Math.floor(Math.random() * items.length)];

const randomHeight = (min = 280, max = 500) =>
  Math.floor(Math.random() * (max - min)) + min;

const getItems = (cur = 20) => {
  const items = [];
  for (let i = 0; i < cur; i++) {
    items.push({
      id: i,
      src: images[i],
      height: randomHeight(),
    });
  }
  return items;
};
