import React from 'react';
import firebase from '../../firebase/firebase';
import { useStyles } from './BoardStyles';
import useMasonryGrid from '../../hooks/useMasonryGrid';
import CollectionCard from './CollectionCard';

function Boards() {
  const boardsRef = firebase.db.collection('boards');
  const [collection, setCollection] = React.useState([]);

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

  const { Masonry } = useMasonryGrid();

  React.useEffect(() => {
    getCollection();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>My Collection</h1>
      {!collection.length > 0 && (
        <p className={classes.defaultText}>
          There are currently no pinned images for your boards. you can search for
          images in the search page!
        </p>
      )}
      {collection.length > 0 && (
        <div className={classes.masonryContainer}>
          <Masonry
            style={{ outline: 'none' }}
            columnGutter={10}
            columnWidth={275}
            overscanBy={2}
            items={collection}
            render={CollectionCard}
          />
        </div>
      )}
    </div>
  );
}

export default Boards;
