import React from 'react';

function useFetch(initialUrl, initialParams = {}, skip = false) {
	const [ url, updateUrl ] = React.useState(initialUrl);
	const [ params, updateParams ] = React.useState(initialParams);
	const [ error, setError ] = React.useState(null);
	const [ hasError, setHasError ] = React.useState(false);
	const [ isDataLoading, setIsDataLoading ] = React.useState(false);
	const [ data, setData ] = React.useState([]);

	const queryString = Object.keys(params)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
		.join('&');

	React.useEffect(
		() => {
			const fetchData = async () => {
				try {
					setIsDataLoading(true);
					const response = await fetch(`${url}${queryString}`);
					const result = await response.json();
					if (response.ok) {
						if (result.total > 19) {
							setData(result.results);
						} else {
							setError('sorry no results found');
						}
					} else {
						setHasError(true);
						setError(result);
					}
				} catch (error) {
					setHasError(true);
					setError(error.message);
				} finally {
					setIsDataLoading(false);
				}
			};
			fetchData();
		},
		[ url, params ]
	);
	return {
		data,
		isDataLoading,
		hasError,
		error,
		updateUrl,
		updateParams
	};
}

export default useFetch;
