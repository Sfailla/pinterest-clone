import React from 'react';
import logo from '../../svg/pinterest-logo.svg';

const HomePageCard = () => {
	return (
		<div className="card homepage__card">
			<div className="card-body homepage__card-body">
				<div className="card-body-upper">
					<img
						className="pinterest-logo homepage__logo"
						src={logo}
						alt="pinterest logo"
					/>
					<div className="text-wrapper homepage__text-wrapper">
						<h1>Welcome to pinterest</h1>
						<p>Find new ideas to try</p>
					</div>
				</div>
				<div className="button-group">
					<div className="button-wrapper">
						<button className="rounded-button red-button">
							Log in
						</button>
					</div>
					<div className="button-wrapper">
						<button className="rounded-button grey-button">
							Sign up
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

export default HomePageCard;
