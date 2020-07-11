import React from 'react';

function useFetch(url) {
	// const [ isLoading, setIsLoading ] = React.useState(false);
	const [ data, setData ] = React.useState(null);

	React.useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(url);
			const response = await res.json();

			setData(response.results);
		};
		fetchData();
	}, []);
	return {
		data
	};
}

export default useFetch;
