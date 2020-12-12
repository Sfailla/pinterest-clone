import React from 'react';

export default function useForm(initialState, validate, authenticate) {
	const [ values, setValues ] = React.useState(initialState);
	const [ errors, setErrors ] = React.useState(null);
	const [ isSubmitting, setSubmitting ] = React.useState(false);

	React.useEffect(
		() => {
			if (isSubmitting) {
				const noErrors = Object.keys(errors).length === 0;
				if (noErrors) {
					setSubmitting(false);
					authenticate();
				} else {
					console.log('authentication error');
					setSubmitting(false);
				}
			}
		},
		[ errors, isSubmitting, authenticate ]
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
		setErrors(errors);
		setSubmitting(true);
	};

	return {
		handleOnChange,
		handleOnSubmit,
		isSubmitting,
		values,
		errors
	};
}
