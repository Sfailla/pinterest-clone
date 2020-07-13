import React, { Fragment } from 'react';
import { useStyles } from './HomePageStyles';

import Button from '../../components/buttons/Button';
import GridBox from '../../components/grid/GridBox';
import HomePageCard from '../../components/homepage-card/HomePageCard';
import GridContainer from '../../components/grid/GridContainer';
import SigninAndSignup from '../../components/user-auth/SigninAndSignup';
import {
	greyButton,
	greyButtonHover
} from '../../styles/variables/variables';

import images from './images';
import { Grid } from '@material-ui/core';

console.count('homepage_render_count');

function HomePage(props) {
	const classes = useStyles();
	const [ renderSignup, setRenderSignup ] = React.useState(false);
	const [ renderLogin, setRenderLogin ] = React.useState(false);
	const [ renderAuthCard, setRenderAuthCard ] = React.useState(true);

	const randomSize = () => {
		const sizes = [ 3, 4, 5 ];
		return sizes[Math.floor(Math.random() * sizes.length)];
	};

	const randomChoice = items =>
		items[Math.floor(Math.random() * items.length)];
	const random = randomChoice(images);

	console.log(images);

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
						name="Log in"
						variant="authlink"
						color={greyButton}
						hover={greyButtonHover}
						onClick={() => {
							setRenderSignup(false);
							setRenderLogin(true);
						}}
					/>
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
						name="Log Out"
						variant="authlink"
						color={greyButton}
						hover={greyButtonHover}
						onClick={() => {
							setRenderSignup(true);
							setRenderLogin(false);
						}}
					/>
				</Fragment>
			)}

			<div className={classes.root}>
				<GridContainer>
					{images.map(image => {
						<GridBox size={randomSize()} src={image} />;
					})}
					{/* <GridBox size={randomSize()} src={image1} />
					<GridBox size={randomSize()} src={image2} />
					<GridBox size={randomSize()} src={image3} />
					<GridBox size={randomSize()} src={image4} />
					<GridBox size={randomSize()} src={image5} />
					<GridBox size={randomSize()} src={image6} />
					<GridBox size={randomSize()} src={image7} />
					<GridBox size={randomSize()} src={image8} />
					<GridBox size={randomSize()} src={image9} />
					<GridBox size={randomSize()} src={image10} />
					<GridBox size={randomSize()} src={image1} />
					<GridBox size={randomSize()} src={image4} />
					<GridBox size={randomSize()} src={image5} />
					<GridBox size={randomSize()} src={image6} />
					<GridBox size={randomSize()} src={image3} />
					<GridBox size={randomSize()} src={image8} />
					<GridBox size={randomSize()} src={image9} />
					<GridBox size={randomSize()} src={image7} />
					<GridBox size={randomSize()} src={image10} />
					<GridBox size={randomSize()} src={image1} />
					<GridBox size={randomSize()} src={image2} />
					<GridBox size={randomSize()} src={image8} />
					<GridBox size={randomSize()} src={image7} />
					<GridBox size={randomSize()} src={image3} />
					<GridBox size={randomSize()} src={image2} />
					<GridBox size={randomSize()} src={image4} />
					<GridBox size={randomSize()} src={image5} />
					<GridBox size={randomSize()} src={image6} />
					<GridBox size={randomSize()} src={image8} />
					<GridBox size={randomSize()} src={image9} />
					<GridBox size={randomSize()} src={image10} /> */}
				</GridContainer>
			</div>
		</Fragment>
	);
}

export default HomePage;
