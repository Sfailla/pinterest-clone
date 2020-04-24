import React, { useEffect, useState } from 'react';
import firebase from '../../firebase/firebase';

function userAuth() {
	const [ user, setUser ] = useState(null);

	useEffect(
		() => {
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
		},
		[ user ]
	);
	return user;
}

export default userAuth;
