import React from 'react';
import { useStyles } from './BoardStyles';

const CollectionCard = ({ data: { id, name, src, height } }) => {
  const classes = useStyles({ height, src });

  return (
    <button className={classes.button}>
      <div className={classes.collectionCard}>
        <span children={name.toUpperCase()} />
      </div>
    </button>
  );
};

export default CollectionCard;
