import React from 'react';
import logo from '../../svg/pinterest-logo.svg';

import RenderSignup from '../signup/RenderSignup';
import RenderLogin from '../login/RenderLogin';
import Button from '../buttons/Button';

export const SigninAndSignup = ({ renderSignup, renderLogin }) => {
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
				{renderSignup && <RenderSignup />}
				{renderLogin && <RenderLogin />}
				<div className="wrapper">
					<div className="button-group">
						<span>OR</span>
						<div className="button-wrapper">
							<Button
								name="Continue with Facebook"
								className="rounded-button facebook-button"
							/>
						</div>
						<div className="button-wrapper">
							<Button
								name="Continue with Google"
								className="rounded-button"
							/>
						</div>
					</div>
					<div className="policy">
						<p>
							By continuing, you agree to Pintersest's{' '}
							<span className="bold-text">
								Terms of Service, Privacy Policy
							</span>
						</p>
						<p className="member-link">
							already a member?
							<a href="#0"> click here</a>
						</p>
					</div>
				</div>
			</div>
			<div className="card-footer grey-background">
				<p>Create a business account</p>
			</div>
		</div>
	);
};

export default SigninAndSignup;
