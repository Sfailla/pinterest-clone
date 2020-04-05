import React from 'react';
import logo from '../../svg/pinterest-logo.svg';

export const SigninAndSignup = () => {
	return (
		<div className="card">
			<div className="card-body">
				<div className="card-body-upper">
					<img
						className="pinterest-logo"
						src={logo}
						alt="pinterest logo"
					/>
					<div className="text-wrapper">
						<h1>Welcome to pinterest</h1>
						<p>Find new ideas to try</p>
					</div>
				</div>
				<div className="input-wrapper">
					<input type="text" placeholder="Email" name="email" />
					<input
						type="password"
						placeholder="Password"
						name="password"
					/>
					<input type="number" placeholder="Age" name="age" />
				</div>
				<div className="button-wrapper">
					<div className="ind-btn">
						<button className="rounded-button login-button">
							Continue
						</button>
					</div>
					<span>OR</span>
					<div className="ind-btn">
						<button className="rounded-button signup-button">
							Continue with Facebook
						</button>
					</div>
					<div className="ind-btn">
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
