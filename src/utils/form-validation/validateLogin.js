export default function validateLogin(values) {
	let errors = {};

	// Email Errors
	if (!values.email) {
		errors.email = 'Email is required';
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
	) {
		errors.email = 'Invalid Email Address';
	}
	// Password Errors
	if (!values.password) {
		errors.password = 'Password is required';
	} else if (values.password.length < 6) {
		errors.password = 'Password must be 6 characters';
	}
	// Name Errors
	// if (location && !values.name) {
	// 	errors.name = 'Name is required';
	// } else if (location && values.name.length < 4) {
	// 	errors.name = 'Name must be more than 3 characters';
	// }

	return errors;
}
