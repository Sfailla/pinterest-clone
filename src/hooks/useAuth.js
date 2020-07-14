import React from 'react';
import firebase from '../firebase/firebase';

function useAuth() {
	const [ user, setUser ] = React.useState(null);
	const [ isAuthPending, setIsAuthPending ] = React.useState(false);

	React.useEffect(() => {
		setIsAuthPending(true);
		const unsubscribe = firebase.auth.onAuthStateChanged(user => {
			if (user) {
				// user is signed in
				setUser(user);
				setIsAuthPending(false);
				localStorage.setItem('userAuth', JSON.stringify(user));
			} else {
				// user is not signed in
				setUser(null);
				setIsAuthPending(false);
				localStorage.removeItem('userAuth');
			}
		});

		return () => unsubscribe();
	}, []);
	return {
		user,
		isAuthPending
	};
}

export default useAuth;
