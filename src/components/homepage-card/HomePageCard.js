import React from 'react';
import logo from '../../svg/pinterest-logo.svg';
import Button from '../buttons/Button';
import {
	redButton,
	redButtonHover,
	greyButton,
	greyButtonHover
} from '../../styles/variables/variables';

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
					<div className={classes.textWrapper}>
						<img
							className={classes.logo}
							src={logo}
							alt="pinterest logo"
						/>
						<h1>Welcome to pinterest</h1>
						<p>Find new ideas to try</p>
					</div>
				</div>

				<div className={classes.buttonWrapper}>
					<Button
						name="Log in"
						color={redButton}
						hover={redButtonHover}
						variant="rounded"
						onClick={() => {
							setRenderAuthCard(false);
							setRenderLogin(true);
						}}
					/>
				</div>
				<div className={classes.buttonWrapper}>
					<Button
						name="Sign up"
						textColor="black"
						color={greyButton}
						hover={greyButtonHover}
						variant="rounded"
						onClick={() => {
							setRenderAuthCard(false);
							setRenderSignup(true);
						}}
					/>
				</div>
			</div>
			<div className={classes.cardFooter}>
				<p>Create a business account</p>
			</div>
		</div>
	);
}

export default HomePageCard;
