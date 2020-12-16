import React from 'react';

const randomHeight = (min = 280, max = 500) => {
	return Math.floor(Math.random() * (max - min)) + min;
};

const formatGridItems = items => {
	const arrayItems = [];
	items &&
		items.map(res => {
			const items = {
				id: res.id,
				name: res.user.name,
				height: randomHeight(),
				src: res.urls.regular
			};
			arrayItems.push(items);
		});
	return arrayItems;
};

export const useGridItems = data => {
	const [ gridItems, setGridItems ] = React.useState(data);

	React.useEffect(
		() => {
			const arrayItems = formatGridItems(data);
			setGridItems(arrayItems);

			return () => arrayItems;
		},
		[ data ]
	);

	return gridItems;
};
