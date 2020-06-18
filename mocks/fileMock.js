const fakeData = {};

const handleGetAPIData = async query => {
	const baseUrl = 'https://api.unsplash.com/search/photos?';
	const client_id = 'qoz2rrh6ChkvTtjYQapHD8P3cXZNi2ZDpG_CD7WBoOU';
	const urlParams = `&query=${query}&page=1&per_page=20&client_id=${client_id}`;
	const result = await fetch(`${baseUrl}${urlParams}`);
	const data = await result.json();

	return data.results;
};

module.exports = {
	handleGetAPIData
};
