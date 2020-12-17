import React from "react";

function useFetch(initialUrl, initialParams = {}) {
  const [url, updateUrl] = React.useState(initialUrl);
  const [params, updateParams] = React.useState(initialParams);
  const [fetchErrors, setFetchErrors] = React.useState("");
  const [hasError, setHasError] = React.useState(false);
  const [isDataLoading, setIsDataLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  const queryString = Object.keys(params)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(params[key]))
    .join("&");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsDataLoading(true);
        const response = await fetch(`${url}${queryString}`);
        const result = await response.json();
        if (response.ok) {
          if (result.total > 19) {
            setData(result);
          } else {
            setFetchErrors("sorry no results found");
          }
        } else {
          setHasError(true);
          setFetchErrors(result);
        }
      } catch (error) {
        setHasError(true);
        setFetchErrors(error.message);
      } finally {
        setIsDataLoading(false);
      }
    };
    fetchData();
  }, [url, params]);
  return {
    data,
    isDataLoading,
    hasError,
    setFetchErrors,
    fetchErrors,
    updateUrl,
    updateParams,
  };
}

export default useFetch;
