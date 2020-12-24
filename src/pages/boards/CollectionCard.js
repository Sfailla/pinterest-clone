import React from 'react';
import { useStyles } from './BoardStyles';

const CollectionCard = ({ data: { name, src, height } }) => {
  const classes = useStyles({ height, src });

  return (
    <div className={classes.container}>
      <button className={classes.button}>
        <div className={classes.collectionCard}>
          {/* <span children={<p>hello world</p>} /> */}
        </div>
      </button>
    </div>
  );
};

export default CollectionCard;
