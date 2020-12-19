import React from 'react';
import images from '../../pages/homepage/images';

const randomHeight = (min = 280, max = 500) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const randomChoice = items => items[Math.floor(Math.random() * items.length)];

const formatGridItems = items => {
  const arrayItems = [];
  items &&
    items.map((res, idx) => {
      const items = {
        id: res.id,
        name: res.user.name,
        height: randomHeight(),
        src: res.urls.regular,
      };
      arrayItems.push(items);
    });

  if (arrayItems.length < 30) {
    let i = 1;
    while (arrayItems.length < 30) {
      arrayItems.push({
        id: `skeleton-${i}`,
        name: `skeleton-${i}`,
        height: randomHeight(),
        src: randomChoice(images),
      });
      i++;
    }
  }

  return arrayItems;
};

export const useGridItems = data => {
  const [gridItems, setGridItems] = React.useState(data);

  React.useEffect(() => {
    async function getResults() {
      const arrayItems = await formatGridItems(data);
      setGridItems(arrayItems);
    }
    getResults();
  }, [data]);

  return gridItems;
};
