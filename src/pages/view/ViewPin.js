import React from 'react';
// import './view.css';

import Button from '../../components/buttons/Button';
import ButtonGroup from '../../components/buttons/ButtonGroup';

import { useStyles } from './viewStyles';

export default function ViewPin({ viewData }) {
  const { src, name } = viewData;
  const classes = useStyles({ src });

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.cardImage}>
          <div className={classes.image} />
        </div>
        <div className={classes.cardDetails}>
          <div className={classes.text}>
            <h1>Photographer: {name.toUpperCase()}</h1>
            <p className="details__description">
              {/* {description ? description : <span>-no description-</span>} */}
            </p>
          </div>
          <div className={classes.link}>
            <a
              // href={authorLink}
              target="_blank"
              rel="noopener nofollow"
              className="details__author-link"
            >
              more from author
            </a>
          </div>
          <ButtonGroup className="details__button-group">
            <div className="button-wrapper ">
              <Button className="details__button red-button">
                Remove from Boards
              </Button>
            </div>
            <div className="button-wrapper">
              <Button className="details__button grey-button">DOWNLOAD IMAGE</Button>
            </div>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
