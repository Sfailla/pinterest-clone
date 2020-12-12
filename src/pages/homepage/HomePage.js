import React, { Fragment } from 'react';

import Button from '../../components/buttons/Button';
import HomePageCard from '../../components/homepage-card/HomePageCard';
import SigninAndSignup from '../../components/user-auth/SigninAndSignup';
import { greyButton, greyButtonHover } from '../../styles';
import MasonicGrid from '../../components/grid/MasonicGrid';

function HomePage(props) {
	const [ renderSignup, setRenderSignup ] = React.useState(false);
	const [ renderLogin, setRenderLogin ] = React.useState(false);
	const [ renderAuthCard, setRenderAuthCard ] = React.useState(true);

	return (
		<Fragment>
			{renderAuthCard && (
				<Fragment>
					<HomePageCard
						setRenderLogin={setRenderLogin}
						setRenderSignup={setRenderSignup}
						setRenderAuthCard={setRenderAuthCard}
					/>
				</Fragment>
			)}
			{renderSignup && (
				<Fragment>
					<SigninAndSignup
						history={props.history}
						renderLogin={renderLogin}
						renderSignup={renderSignup}
						setRenderLogin={setRenderLogin}
						setRenderSignup={setRenderSignup}
					/>
					<Button
						variant="authlink"
						color={greyButton}
						hover={greyButtonHover}
						onClick={() => {
							setRenderSignup(false);
							setRenderLogin(true);
						}}
					>
						Log in
					</Button>
				</Fragment>
			)}
			{renderLogin && (
				<Fragment>
					<SigninAndSignup
						history={props.history}
						renderLogin={renderLogin}
						renderSignup={renderSignup}
						setRenderLogin={setRenderLogin}
						setRenderSignup={setRenderSignup}
					/>
					<Button
						variant="authlink"
						color={greyButton}
						hover={greyButtonHover}
						onClick={() => {
							setRenderSignup(true);
							setRenderLogin(false);
						}}
					>
						Sign up
					</Button>
				</Fragment>
			)}
			<MasonicGrid />
		</Fragment>
	);
}

export default HomePage;
