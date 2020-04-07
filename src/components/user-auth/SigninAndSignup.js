import React from 'react';
import logo from '../../svg/pinterest-logo.svg';

import FormGroup from '../form-group/FormGroup';
import Input from '../input/Input';

export const SigninAndSignup = () => {
	return (
		<div className="card signup__card">
			<div className="card-body signup__card-body">
				<div className="card-body-upper signup__card-body-upper">
					<img
						className="pinterest-logo signup__logo"
						src={logo}
						alt="pinterest logo"
					/>
					<div className="signup__text-wrapper">
						<h3>Welcome to pinterest</h3>
						<p>Find new ideas to try</p>
					</div>
				</div>
				<FormGroup className="form-wrapper">
					<Input
						className="card-input"
						type="text"
						placeholder="Email"
						name="email"
					/>
					<Input
						type="password"
						placeholder="Password"
						className="card-input"
						name="password"
					/>
					<Input
						type="number"
						className="card-input"
						placeholder="Age"
						name="age"
					/>
				</FormGroup>
				<div className="button-group">
					<div className="button-wrapper">
						<button className="rounded-button login-button">
							Continue
						</button>
					</div>
					<span>OR</span>
					<div className="button-wrapper">
						<button className="rounded-button signup-button">
							Continue with Facebook
						</button>
					</div>
					<div className="button-wrapper">
						<button className="rounded-button signup-button">
							Continue with Google
						</button>
					</div>
				</div>
			</div>
			<div className="card-footer">
				<p>Create a business account</p>
			</div>
		</div>
	);
};

export default SigninAndSignup;
