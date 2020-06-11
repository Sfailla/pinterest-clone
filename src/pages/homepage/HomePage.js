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

import image1 from '../../images/grid-img-1.png';
import image2 from '../../images/grid-img-2.png';
import image3 from '../../images/grid-img-3.png';
import image4 from '../../images/grid-img-4.png';
import image5 from '../../images/grid-img-5.png';
import image6 from '../../images/grid-img-6.png';
import image7 from '../../images/grid-img-7.png';
import image8 from '../../images/grid-img-8.png';
import image9 from '../../images/grid-img-9.png';
import image10 from '../../images/grid-img-10.png';

console.count('homepage_render_count');

function HomePage(props) {
	const classes = useStyles();
	const [ renderSignup, setRenderSignup ] = React.useState(false);
	const [ renderLogin, setRenderLogin ] = React.useState(false);
	const [ renderAuthCard, setRenderAuthCard ] = React.useState(true);

	const randomSize = () => {
		const sizes = [ 3, 4, 5 ];
		let random = Math.floor(Math.random() * sizes.length);
		return sizes[random];
	};

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
					<GridBox size={randomSize()} src={image1} />
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
					<GridBox size={randomSize()} src={image10} />
				</GridContainer>
			</div>
		</Fragment>
	);
}

export default HomePage;
