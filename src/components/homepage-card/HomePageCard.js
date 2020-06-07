import React from 'react';
import logo from '../../svg/pinterest-logo.svg';
import Button from '../buttons/Button';

import { useStyles } from './HomePageCardStyles';

function HomePageCard({
	setRenderLogin,
	setRenderSignup,
	setRenderAuthCard
}) {
	const classes = useStyles();
	return (
		<div className={classes.card}>
			<div className={classes.cardBody}>
				<div className={classes.cardBodyUpper}>
					<img
						className={classes.logo}
						src={logo}
						alt="pinterest logo"
					/>
					<div className={classes.textWrapper}>
						<h1>Welcome to pinterest</h1>
						<p>Find new ideas to try</p>
					</div>
				</div>
				<div className="button-group">
					<div className={classes.buttonWrapper}>
						<Button
							name="Log in"
							onClick={() => {
								setRenderAuthCard(false);
								setRenderLogin(true);
							}}
							className="rounded-button red-button"
						/>
					</div>
					<div className={classes.buttonWrapper}>
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
			<div className={classes.cardFooter}>
				<p>Create a business account</p>
			</div>
		</div>
	);
}

export default HomePageCard;
