import React from 'react';
import './view.css';

export default function ViewPin({ viewData }) {
	return (
		<div className="details wrapper">
			<h1>{viewData.author.toUpperCase()}</h1>
			<div className="details__card">
				<div className="details__upper">
					<img src={viewData.img} className="details__img" />
				</div>
				<div className="details__lower" />
			</div>
		</div>
	);
}
