import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  defaultText: {
    fontSize: '16px',
    fontStyle: 'italic',
    textAlign: 'center',
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
  masonryContainer: {},
}));
