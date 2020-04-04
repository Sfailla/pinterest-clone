import React from 'react';

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

const HomePage = () => {
	return (
		<div className="homepage">
			<div className="homepage__grid-container">
				<div
					style={{ background: `url(${image1})` }}
					className="box box-1"
				/>
				<div
					style={{ background: `url(${image2})` }}
					className="box box-2"
				/>
				<div
					style={{ background: `url(${image3})` }}
					className="box box-3"
				/>
				<div
					style={{ background: `url(${image4})` }}
					className="box box-4"
				/>
				<div
					style={{ background: `url(${image5})` }}
					className="box box-5"
				/>
				<div
					style={{ background: `url(${image6})` }}
					className="box box-6"
				/>
				<div
					style={{ background: `url(${image7})` }}
					className="box box-7"
				/>
				<div
					style={{ background: `url(${image8})` }}
					className="box box-8"
				/>
				<div
					style={{ background: `url(${image9})` }}
					className="box box-9"
				/>
				<div
					style={{ background: `url(${image10})` }}
					className="box box-10"
				/>
			</div>
		</div>
	);
};

export default HomePage;
