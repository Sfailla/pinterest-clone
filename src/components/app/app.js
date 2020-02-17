import React from 'react';
import Header from '../Header.js';

const styles = {
	content: {
		marginTop: '5rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
};

const App = () => {
	return (
		<div>
			<Header />
			<div style={styles.content}>
				<code>Remove / Edit Header.jsx file to get started</code>
			</div>
		</div>
	);
};

export default App;
