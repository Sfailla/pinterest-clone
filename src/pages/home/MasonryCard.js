import React from 'react';
import { useStyles } from './HomeStyles';
import CardContext from '../dashboard/cardContext';

const MasonryCard = ({ data: { id, name, src, height } }) => {
	const classes = useStyles({ src, height });
	const { setSingleViewData } = React.useContext(CardContext);
	const handleClick = React.useCallback(() => {
		setSingleViewData({
			id,
			name,
			src
		});
	}, []);

	return (
		<button onClick={handleClick} className={classes.button}>
			<div className={classes.masonCard}>
				<span children={name.toUpperCase()} />
			</div>
		</button>
	);
};

export default MasonryCard;
