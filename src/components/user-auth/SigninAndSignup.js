import React from 'react';
import logo from '../../svg/pinterest-logo.svg';

import Signup from '../signup/Signup';

export const SigninAndSignup = () => {
	return (
		<div className="card auth__card">
			<div className="card-body auth__card-body">
				<div className="card-body-upper auth__card-body-upper">
					<img
						className="pinterest-logo auth__logo"
						src={logo}
						alt="pinterest logo"
					/>
					<div className="auth__text-wrapper">
						<h3>Welcome to pinterest</h3>
						<p>Find new ideas to try</p>
					</div>
				</div>
				<Signup />
			</div>
			<div className="card-footer grey-background">
				<p>Create a business account</p>
			</div>
		</div>
	);
};

export default SigninAndSignup;
