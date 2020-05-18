import React from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../../firebase/firebase';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
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
import { useStyles } from './HeaderStyles';

function Header({ page, setPage, setQuery }) {
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const classes = useStyles();
	const history = useHistory();
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
							name="search"
							type="text"
							onChange={event => setQuery(event.target.value)}
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
