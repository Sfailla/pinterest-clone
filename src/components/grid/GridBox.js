import React from 'react';

const Box = ({ image, className, addStyle, onClick }) => {
	return (
		<div
			style={{
				background: `url(${image}) no-repeat center top / cover`,
				...addStyle
			}}
			className={className}
			onClick={onClick}
		/>
	);
};

export default Box;
