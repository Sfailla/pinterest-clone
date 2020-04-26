import React from 'react';

const Box = ({ image, className }) => {
	return (
		<div
			style={{
				background: `url(${image}) no-repeat center top / cover`
			}}
			className={className}
		/>
	);
};

export default Box;
