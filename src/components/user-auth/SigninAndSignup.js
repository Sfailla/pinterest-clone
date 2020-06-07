import React from 'react';
import firebase from '../../firebase/firebase';
import { useStyles } from './SigninAndSignupStyles';

import logo from '../../svg/pinterest-logo.svg';
import RenderSignup from '../signup/RenderSignup';
import RenderLogin from '../login/RenderLogin';
import Button from '../buttons/Button';
import formValidation from '../form-validation/formValidation';
import validateLogin from '../form-validation/validateLogin';

function SigninAndSignup({ renderSignup, renderLogin, history }) {
	const INITIAL_STATE = {
		email: '',
		password: '',
		name: ''
	};

	const {
		values,
		errors,
		handleOnChange,
		handleOnSubmit
	} = formValidation(INITIAL_STATE, validateLogin, authenticateUser);
	const [ firebaseError, setFirebaseError ] = React.useState(null);
	const classes = useStyles();

	function authenticateUser() {
		const { email, password, name } = values;

		return renderSignup
			? firebase
					.register(email, password, name)
					.then(() => history.push('/dashboard'))
					.catch(err => setFirebaseError(err))
			: firebase
					.login(email, password)
					.then(() => history.push('/dashboard'))
					.catch(err => setFirebaseError(err));
	}

	return (
		<div className={classes.authCard}>
			<div className={classes.cardBody}>
				<div className={classes.cardBodyUpper}>
					<img
						className={classes.logo}
						src={logo}
						alt="pinterest logo"
					/>
					<div className={classes.textWrapper}>
						<h3>Welcome to pinterest</h3>
						<p>Find new ideas to try</p>
					</div>
				</div>
				{renderSignup && (
					<RenderSignup
						handleOnSubmit={handleOnSubmit}
						handleOnChange={handleOnChange}
						values={values}
					/>
				)}
				{renderLogin && (
					<RenderLogin
						handleOnSubmit={handleOnSubmit}
						handleOnChange={handleOnChange}
						values={values}
					/>
				)}
				<div className={classes.wrapper}>
					<div className="button-group">
						<span>OR</span>
						<div className={classes.buttonWrapper}>
							<Button
								name="Continue with Facebook"
								className="rounded-button facebook-button"
							/>
						</div>
						<div className={classes.buttonWrapper}>
							<Button
								name="Continue with Google"
								className="rounded-button"
							/>
						</div>
					</div>
					<div className={classes.policy}>
						<p>
							By continuing, you agree to Pintersest's
							<span className={classes.boldText}>
								Terms of Service, Privacy Policy
							</span>
						</p>
						<p className={classes.memberLink}>
							already a member?
							<a href="#0"> click here</a>
						</p>
					</div>
				</div>
			</div>
			<div
				className={`${classes.greyBackground} ${classes.cardFooter}`}
			>
				<p>Create a business account</p>
			</div>
		</div>
	);
}

export default SigninAndSignup;
