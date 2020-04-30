import React from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../../firebase/firebase';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../svg/pinterest-logo.svg';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,

		'& .MuiButton-root': {
			marginLeft: '8px',
			padding: '0px',
			borderRadius: '24px'
		},
		'& .MuiButton-root:hover.active': {
			backgroundColor: 'black',
			borderRadius: '24px'
		}
	},
	background: {
		height: '65px',
		backgroundColor: '#FFF',
		boxShadow: 'none',
		color: '#000',
		borderBottom: '1px solid #ddd'
	},
	menuButton: {
		width: '50px',
		height: '50px',
		marginLeft: '8px',
		marginRight: theme.spacing(2)
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.grey[400], 0.25),
		'&:hover': {
			backgroundColor: fade(theme.palette.grey[500], 0.25)
		},
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(2),
			width: 'auto'
		}
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit',
		padding: theme.spacing(0, 2)
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '20ch',
			'&:focus': {
				width: '30ch'
			}
		}
	},
	alert: {
		width: '50px',
		marginLeft: '8px'
	},
	spacer: {
		flexGrow: 1
	},
	logo: {
		width: '40px',
		height: '40px'
	},
	iconFill: {
		fill: '#8e8e8e',
		'&:hover': {
			fill: theme.palette.grey[700]
		}
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
		alignItems: 'center'
	}
}));

function Header({ page, setPage }) {
	const classes = useStyles();
	const history = useHistory();

	const [ anchorEl, setAnchorEl ] = React.useState(null);

	const open = Boolean(anchorEl);

	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.root}>
			<AppBar className={classes.background} position="static">
				<Toolbar>
					{/* logo */}
					<img className={classes.logo} src={logo} />
					<Button
						className={page === 'home' ? 'active' : ''}
						onClick={() => {
							setPage('home');
						}}
					>
						{/* home link */}
						<Typography varient="h4" className={classes.wordLink}>
							HOME
						</Typography>
					</Button>
					{/* boards link */}
					<Button
						onClick={() => {
							setPage('boards');
						}}
						className={page === 'boards' ? 'active' : ''}
					>
						<Typography varient="h4" className={classes.wordLink}>
							BOARDS
						</Typography>
					</Button>
					{/* search input and icon */}
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					{/* spacer */}
					<div className={classes.spacer} />
					{/* chat icon and badges */}
					<IconButton color="inherit" aria-label="chat with people">
						<Badge badgeContent={2} color="secondary">
							<ChatOutlinedIcon className={classes.iconFill} />
						</Badge>
					</IconButton>
					{/* alert icon and badges */}
					<IconButton
						aria-label="new notifications"
						color="inherit"
						className={classes.alert}
					>
						<Badge badgeContent={4} color="secondary">
							<NotificationsIcon className={classes.iconFill} />
						</Badge>
					</IconButton>
					{/* open menu button  */}
					<IconButton
						onClick={handleMenu}
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
					>
						<MoreHorizIcon
							fontSize="large"
							className={classes.iconFill}
						/>
					</IconButton>
					{/* user menu options */}
					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right'
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right'
						}}
						open={open}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}>Profile</MenuItem>
						<MenuItem
							onClick={() => {
								firebase
									.logout()
									.then(() => history.push('/'))
									.catch(err => console.log(err));
								handleClose();
							}}
						>
							Sign Out
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
