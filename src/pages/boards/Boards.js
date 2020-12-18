import React from 'react';
import firebase from '../../firebase/firebase';
import { useStyles } from './BoardStyles';
import useMasonryGrid from '../../hooks/useMasonryGrid';
import CollectionCard from './CollectionCard';

function Boards() {
  const [collection, setCollection] = React.useState([]);
  const boardsRef = firebase.db.collection('boards');

  const getCollection = () => {
    boardsRef.onSnapshot(snapshot => {
      const collectionData = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setCollection(collectionData);
    });
  };

  const {
    Masonry,
    positioner,
    offset,
    resizeObserver,
    windowHeight,
    containerRef,
  } = useMasonryGrid();

  React.useEffect(() => {
    getCollection();
  }, []);

  const classes = useStyles();

  return (
    <div>
      <h1>Boards</h1>
      {!collection.length > 0 && (
        <p className={classes.defaultText}>
          There are currently no pinned images for your boards. you can search for
          images in the search page!
        </p>
      )}
      {collection.length > 0 && (
        <div className={classes.masonryContainer}>
          <Masonry
            style={{ outline: 'none', width: '100%' }}
            positioner={positioner}
            resizeObserver={resizeObserver}
            // The distance in px between the top of the document and the top of the
            // masonry grid container
            offset={offset}
            // columnGutter={10}
            // The height of the virtualization window
            height={windowHeight}
            // Forwards the ref to the masonry container element
            containerRef={containerRef}
            items={collection}
            render={CollectionCard}
          />
        </div>
      )}
    </div>
  );
}

export default Boards;
