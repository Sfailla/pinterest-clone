import React, { Fragment } from 'react';

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

import Box from '../../components/grid-box/Box';
import HomePageCard from '../../components/homepage-card/HomePageCard';
import SigninAndSignup from '../../components/user-auth/SigninAndSignup';

function HomePage() {
	return (
		<Fragment>
			{/* <HomePageCard /> */}
			<SigninAndSignup />
			<div className="homepage">
				<div className="grid-container">
					<Box image={image1} className="box box-large" />
					<Box image={image2} className="box box-large" />
					<Box image={image3} className="box box-medium" />
					<Box image={image4} className="box box-medium" />
					<Box image={image5} className="box box-medium" />
					<Box image={image6} className="box box-small" />
					<Box image={image7} className="box box-large" />
					<Box image={image8} className="box box-small" />
					<Box image={image9} className="box box-large" />
					<Box image={image10} className="box box-large" />
					<Box image={image1} className="box box-large" />
					<Box image={image2} className="box box-large" />
					<Box image={image3} className="box box-medium" />
					<Box image={image4} className="box box-medium" />
					<Box image={image5} className="box box-medium" />
					<Box image={image6} className="box box-small" />
					<Box image={image7} className="box box-large" />
					<Box image={image8} className="box box-small" />
					<Box image={image9} className="box box-large" />
					<Box image={image10} className="box box-large" />
					<Box image={image1} className="box box-large" />
					<Box image={image2} className="box box-large" />
					<Box image={image3} className="box box-medium" />
					<Box image={image4} className="box box-medium" />
					<Box image={image5} className="box box-medium" />
					<Box image={image6} className="box box-small" />
					<Box image={image7} className="box box-large" />
					<Box image={image8} className="box box-small" />
					<Box image={image8} className="box box-small" />
					<Box image={image9} className="box box-large" />
					<Box image={image10} className="box box-large" />
				</div>
			</div>
		</Fragment>
	);
}

export default HomePage;
