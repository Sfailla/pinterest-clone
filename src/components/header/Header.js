import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../svg/pinterest-logo.svg';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
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
	}
}));

export default function Header() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.background} position="static">
				<Toolbar>
					<img className={classes.logo} src={logo} />
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
					<div className={classes.spacer} />
					<IconButton color="inherit" aria-label="chat with people">
						<ChatOutlinedIcon className={classes.iconFill} />
					</IconButton>
					<IconButton
						aria-label="show 4 new notifications"
						color="inherit"
						className={classes.alert}
					>
						<Badge badgeContent={4} color="secondary">
							<NotificationsIcon className={classes.iconFill} />
						</Badge>
					</IconButton>
					<IconButton
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
				</Toolbar>
			</AppBar>
		</div>
	);
}
