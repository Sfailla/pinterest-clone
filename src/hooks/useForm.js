import React from 'react';

export default function useForm(initialState, validate, authenticate) {
	const [ values, setValues ] = React.useState(initialState);
	const [ formErrors, setFormErrors ] = React.useState({});
	const [ isSubmitting, setSubmitting ] = React.useState(false);

	React.useEffect(
		() => {
			if (isSubmitting) {
				const noErrors = Object.keys(formErrors).length === 0;
				if (noErrors) {
					setSubmitting(false);
					setValues(initialState);
					authenticate();
				} else {
					console.log('authentication error');
					setSubmitting(false);
				}
			}
		},
		[ formErrors, isSubmitting, authenticate, setValues ]
	);

	const handleOnChange = event => {
		event.persist();

		setValues(prevState => ({
			...prevState,
			[event.target.name]: event.target.value
		}));
	};

	const handleOnSubmit = event => {
		event.preventDefault();
		let errors = validate(values);
		setFormErrors(errors);
		setSubmitting(true);
	};

	return {
		handleOnChange,
		handleOnSubmit,
		isSubmitting,
		values,
		setFormErrors,
		formErrors
	};
}
