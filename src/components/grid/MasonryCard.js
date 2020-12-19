import React from 'react';
import { useStyles } from '../../pages/search/SearchStyles';
import CardContext from '../../pages/dashboard/cardContext';

const MasonryCard = ({ data: { id, name, src, height } }) => {
  const classes = useStyles({ src, height });
  const { handleClick } = React.useContext(CardContext);

  return (
    <button
      onClick={() => handleClick(id, name, src, height)}
      className={classes.button}
    >
      <div className={classes.masonCard}>
        <span children={name.toUpperCase()} />
      </div>
    </button>
  );
};

export default MasonryCard;
