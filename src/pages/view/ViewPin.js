import React from 'react';
import './view.css';

import Button from '../../components/buttons/Button';
import ButtonGroup from '../../components/buttons/ButtonGroup';

export default function ViewPin({
	viewData,
	addPin,
	handleClick,
	SlideTransition
}) {
	const { author, description, img, authorLink } = viewData;
	const background = { backgroundImage: `url(${img})` };
	return (
		<div className="details wrapper">
			<div className="details__card">
				<div className="details__left">
					<div style={background} className="details__img" />
				</div>
				<div className="details__right">
					<div className="details__text-wrapper">
						<h1>{author.toUpperCase()}</h1>
						<p className="details__description">
							{description ? (
								description
							) : (
								<span>-no description-</span>
							)}
						</p>
					</div>
					<div className="button-wrapper">
						<a
							href={authorLink}
							target="_blank"
							rel="noopener nofollow"
							className="details__author-link"
						>
							more from author
						</a>
					</div>
					<ButtonGroup className="details__button-group">
						<div className="button-wrapper ">
							<Button
								className="details__button red-button"
								name="ADD TO BOARDS"
								onClick={() => {
									addPin();
									handleClick(SlideTransition);
								}}
							/>
						</div>
						<div className="button-wrapper">
							<Button
								className="details__button grey-button"
								name="DOWNLOAD IMAGE"
							/>
						</div>
					</ButtonGroup>
				</div>
			</div>
		</div>
	);
}
