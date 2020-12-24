import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
  console.log(theme);
  return {
    root: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[100],
      height: 'auto',
      maxHeight: '100%',
    },
    defaultText: {
      fontSize: '16px',
      fontStyle: 'italic',
      textAlign: 'center',
    },

    // CARD STYLES

    container: {
      width: '100%',
      padding: '10px',
      backgroundColor: 'white',
      boxShadow: theme.shadows[8],
    },
    collectionCard: {
      width: '100%',
      height: props => `${props.height}px`,
      background: props => `url(${props.src}) no-repeat center / cover`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    button: {
      width: '100%',
      height: props => `${props.height}px`,
    },
    masonryContainer: {
      width: '100%',
      maxWidth: 'calc(100% - 20px)',
      margin: '0 auto',
    },
  };
});
