import React from 'react';
import logo from '../../svg/pinterest-logo.svg';
import Button from '../buttons/Button';

const HomePageCard = ({
	setRenderLogin,
	setRenderSignup,
	setRenderAuthCard
}) => {
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
						<Button
							name="Log in"
							onClick={() => {
								setRenderAuthCard(false);
								setRenderLogin(true);
							}}
							className="rounded-button red-button"
						/>
					</div>
					<div className="button-wrapper">
						<Button
							name="Sign up"
							onClick={() => {
								setRenderAuthCard(false);
								setRenderSignup(true);
							}}
							className="rounded-button grey-button"
						/>
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
