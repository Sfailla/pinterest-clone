import React from 'react';

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
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	heading: {
		fontSize: '2.6rem',
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
				<h2 style={styles.heading}>Welcome to React / React Router / Sass</h2>
				<h2 style={styles.subHeading}>Boilerplate</h2>
			</div>
		</div>
	);
};

export default Header;
