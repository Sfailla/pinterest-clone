import React from 'react';
import firebase from '../../firebase/firebase';

function userAuth() {
	const [ user, setUser ] = React.useState(null);

	React.useEffect(() => {
		const unsubscribe = firebase.auth.onAuthStateChanged(user => {
			if (user) {
				// user is signed in
				setUser(user);
			} else {
				// user is not signed in
				setUser(null);
			}
		});

		return () => unsubscribe();
	}, []);
	return user;
}

export default userAuth;
