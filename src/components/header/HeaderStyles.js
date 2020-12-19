import { fade, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    '& .MuiButton-root': {
      marginLeft: '8px',
      padding: '0px',
      borderRadius: '24px',
    },
    '& .MuiToolbar-regular': {
      height: '65px',
    },
  },
  button: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  background: {
    height: '65px',
    backgroundColor: '#FFF',
    boxShadow: theme.shadows[4],
    color: '#000',
    borderBottom: '1px solid #ddd',
  },
  menuButton: {
    width: '50px',
    height: '50px',
    marginLeft: '8px',
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.grey[400], 0.25),
    '&:hover': {
      backgroundColor: fade(theme.palette.grey[500], 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1',
  },
  inputRoot: {
    color: 'inherit',
    padding: theme.spacing(0, 2),
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
  badge: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  alert: {
    width: '50px',
    marginLeft: '8px',
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  spacer: {
    flexGrow: 1,
  },
  logo: {
    width: '40px',
    height: '40px',
    paddingRight: theme.spacing(1),
  },
  iconFill: {
    fill: '#8e8e8e',
    '&:hover': {
      fill: theme.palette.grey[700],
    },
  },
  wordLink: {
    width: '100%',
    minWidth: '60px',
    height: '40px',
    padding: '2px 5px',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    color: 'inherit',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica',
    fontWeight: 'bold',
    fontSize: '16px',
    borderRadius: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  },
  desktopMenu: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  mobileMenu: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      '& .MuiListItem-root': {
        height: '50px',
        justifyContent: 'space-between',
      },
    },
  },
}));
