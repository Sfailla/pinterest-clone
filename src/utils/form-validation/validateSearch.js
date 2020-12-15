export default function validateSearch(values) {
	let errors = {};

	if (!values.search.length) {
		errors.search = 'must provide a value for search field';
	} else if (values.search.length < 3) {
		errors.search = 'search value must be at least 3 characters';
	}

	return errors;
}
