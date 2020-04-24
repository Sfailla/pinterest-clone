import React, { useState } from 'react';

function formValidation(initialState, validate) {
	const [ values, setValues ] = useState(initialState);
	const [ errors, setErrors ] = useState(null);
	const [ isSubmitting, setSubmitting ] = useState(false);

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

export default formValidation;
