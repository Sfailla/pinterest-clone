import React from 'react';

import FormGroup from '../form-group/FormGroup';
import Input from '../input/Input';
import Button from '../buttons/Button';

const Signup = () => {
	return (
		<div className="signup">
			<FormGroup className="form-wrapper">
				<Input
					className="input__card"
					type="text"
					placeholder="Email"
					name="email"
				/>
				<Input
					type="password"
					placeholder="Password"
					className="input__card"
					name="password"
				/>
				<Input
					type="number"
					className="input__card"
					placeholder="Age"
					name="age"
				/>
				<div className="button-wrapper">
					<Button
						name="Continue"
						className="rounded-button continue-button red-button"
					/>
				</div>
			</FormGroup>
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
	);
};

export default Signup;
