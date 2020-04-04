import React, { useRef } from 'react';

const Box = ({ image, className, ref }) => {
	ref = useRef();
	return (
		<div
			style={{
				background: `url(${image}) no-repeat center top / cover`
			}}
			ref={ref}
			className={className}
		/>
	);
};

export default Box;
