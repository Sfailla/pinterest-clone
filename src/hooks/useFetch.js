import React from 'react';

function useFetch(initialUrl, initialParams = {}, skip = false) {
	const [ url, updateUrl ] = React.useState(initialUrl);
	const [ params, updateParams ] = React.useState(initialParams);
	const [ hasError, setHasError ] = React.useState(false);
	const [ errorMessage, setErrorMessage ] = React.useState('');
	const [ isDataLoading, setIsDataLoading ] = React.useState(false);
	const [ data, setData ] = React.useState(null);
	const [ refetchIndex, setRefetchIndex ] = React.useState(0);

	const queryString = Object.keys(params)
		.map(
			key =>
				encodeURIComponent(key) +
				'=' +
				encodeURIComponent(params[key])
		)
		.join('&');

	const refetch = () =>
		setRefetchIndex(prevRefetchIndex => prevRefetchIndex + 1);

	React.useEffect(
		() => {
			const fetchData = async () => {
				if (skip) return setIsDataLoading(true);
				try {
					const response = await fetch(`${url}${queryString}`);
					const result = await response.json();
					if (response.ok) {
						setData(result.results);
					} else {
						setHasError(true);
						setErrorMessage(result);
					}
				} catch (error) {
					setHasError(true);
					setErrorMessage(error.message);
				} finally {
					setIsDataLoading(false);
				}
			};
			fetchData();
		},
		[ url, params, refetchIndex ]
	);
	return {
		data,
		isDataLoading,
		hasError,
		errorMessage,
		updateUrl,
		updateParams,
		refetch
	};
}

export default useFetch;
