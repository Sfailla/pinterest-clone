import React from 'react';

const Box = ({ image, className, addStyle }) => {
	return (
		<div
			style={{
				background: `url(${image}) no-repeat center top / cover`,
				...addStyle
			}}
			className={className}
		/>
	);
};

export default Box;
