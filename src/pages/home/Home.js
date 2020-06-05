import React from 'react';
import { Masonry } from 'masonic';
import MasonryCard from '../../components/grid/MasonryCard';
import './masonic.css';
import { useWindowSize } from '@react-hook/window-size';

const Home = ({ data }) => {
	const [ imgLoaded, setImageLoaded ] = React.useState(false);
	const [ readyToRender, setReadyToRender ] = React.useState(false);
	const [ windowWidth, windowHeight ] = useWindowSize();

	const getGridItems = () => {
		const itemArr = [];

		data &&
			data.map((res, i) => {
				itemArr.push({
					id: res.id,
					name: res.user.name,
					src: res.urls.regular
				});
			});

		return itemArr;
	};

	const handleLoadImg = () => {
		if (!imgLoaded) {
			setImageLoaded(true);
		}
	};

	const LoadImgsAndHide = () => {
		const styles = {
			hideImg: {
				display: 'none'
			}
		};
		return (
			<div style={styles.hideImg}>
				{items.map(i => (
					<MasonryCard
						key={i.id}
						handleLoadImg={handleLoadImg}
						data={i}
					/>
				))}
			</div>
		);
	};

	const items = getGridItems();
	console.log(readyToRender);

	React.useEffect(() => {
		// do something on render
		LoadImgsAndHide();
		setReadyToRender(true);
	}, []);

	return (
		<div className="container">
			Home
			{readyToRender ? (
				<Masonry
					columnWidth={236}
					columnGutter={10}
					overscanBy={1}
					items={items}
					className="grid-item-card"
					render={MasonryCard}
				/>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default Home;
