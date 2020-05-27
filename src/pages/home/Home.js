import * as React from 'react';
import { Masonry } from 'masonic';
import './masonic.css';

const Home = ({ data }) => {
	const [ imgLoaded, setImgLoaded ] = React.useState(false);
	const imageRef = React.useRef(null);

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
			setImgLoaded(true);
		}
	};

	const MasonryCard = ({ data: { name, src } }) => (
		<div className="mason-card">
			<img
				src={src}
				ref={imageRef}
				onLoad={handleLoadImg}
				className="img"
				alt="pix"
			/>
			<span children={name.toUpperCase()} />
		</div>
	);

	const LoadImgsAndHide = () => {
		const styles = {
			hideImg: {
				display: 'none'
			}
		};
		return (
			<div style={styles.hideImg}>
				{items.map(i => <MasonryCard key={i.id} data={i} />)}
			</div>
		);
	};

	let items = getGridItems();

	React.useEffect(() => {
		let img = imageRef.current;
		if (img && img.complete) {
			handleLoadImg();
		}
	}, []);

	return (
		<div className="container">
			{LoadImgsAndHide()}
			{imgLoaded ? (
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
