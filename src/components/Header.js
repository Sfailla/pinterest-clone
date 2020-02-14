import React from 'react';

import logo from '../images/react-logo-1-trans.png';

const styles = {
	header: {
		height: '25rem',
		backgroundColor: '#333',
		letterSpacing: '2px',
		textTransform: 'uppercase',
		textAlign: 'center'
	},
	flexContainer: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	heading: {
		color: 'magenta'
	},
	subHeading: {
		fontSize: '3.2rem',
		color: 'cyan'
	}
};
const Header = () => {
	return (
		<div style={styles.header}>
			<div style={styles.flexContainer}>
				<h2 style={styles.heading}>
					Welcome to your new React Project
				</h2>
				<img src={logo} alt="react-logo" />
			</div>
		</div>
	);
};

export default Header;
