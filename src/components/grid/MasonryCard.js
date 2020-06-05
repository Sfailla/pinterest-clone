import React from 'react';

const MasonryCard = ({ handleLoadImg, data: { name, src } }) => (
	<div className="mason-card">
		<img src={src} onLoad={handleLoadImg} className="img" alt="pix" />
		<span children={name.toUpperCase()} />
	</div>
);

export default MasonryCard;
