import React from 'react';
import './view.css';

export default function ViewPin({ viewData }) {
	const { author, description, img, authorLink } = viewData;
	const background = { backgroundImage: `url(${img})` };
	return (
		<div className="details wrapper">
			<div className="details__card">
				<div className="left">
					<div style={background} className="details__img" />
				</div>
				<div className="details__right">
					<h1>{author.toUpperCase()}</h1>
					<p className="details__description">{description}</p>
					<a
						href={authorLink}
						target="_blank"
						rel="noopener nofollow"
						className="details__author-link"
					>
						link to author
					</a>
				</div>
			</div>
		</div>
	);
}
