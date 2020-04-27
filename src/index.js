import React from 'react';
import ReactDOM from 'react-dom';
// import 'normalize.css';
import './styles/style.scss';

import App from './components/app/app';
import userAuth from './components/user-auth/userAuth';

const AppWrapper = () => {
	const user = userAuth();

	return <App user={user} />;
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
