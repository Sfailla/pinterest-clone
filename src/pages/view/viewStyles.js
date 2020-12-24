import { makeStyles } from '@material-ui/core/styles';
import { Repeat } from '@material-ui/icons';

export const useStyles = makeStyles(theme => {
  return {
    container: {
      width: '100%',
      height: '100%',
      maxWidth: '1000px',
      margin: '0 auto',
      backgroundColor: theme.palette.common.white,
      borderRadius: '30px',
    },
    card: {
      height: '600px',
      padding: '20px',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridGap: '30px',

      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'repeat(2, 1fr)',
      },
    },
    cardImage: {
      // nothing yet
    },
    image: {
      width: '100%',
      height: '100%',
      background: ({ src }) => `url(${src}) no-repeat center / cover`,
      objectFit: 'cover',
    },
    cardDetails: {
      width: '100%',
      backgroundColor: 'lightpink',
      padding: '15px',
      display: 'flex',
      flexDirection: 'column',
    },
    text: {
      '& h1': {
        fontSize: '20px',
      },
    },
    link: {
      flexGrow: '1',
    },
    buttonGroup: {},
    removeButton: {},
    downloadButton: {},
  };
});
