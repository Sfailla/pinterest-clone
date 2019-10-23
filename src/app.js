import React from 'react';
import ReactDOM from 'react-dom';

// import 'normalize.css';
import './styles/style.scss';

import Header from './components/Header.js';

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

ReactDOM.render(<App />, document.getElementById('root'));
