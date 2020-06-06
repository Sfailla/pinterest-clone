import React from 'react';
import '../../pages/home/masonic.css';

const MasonryCard = ({ data: { name, src, height } }) => (
	<div
		style={{
			height,
			background: `url(${src}) no-repeat center / cover`
		}}
		className="mason-card"
	>
		<span children={name.toUpperCase()} />
	</div>
);

export default MasonryCard;
