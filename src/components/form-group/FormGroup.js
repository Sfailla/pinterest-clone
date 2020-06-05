import React from 'react';

const FormGroup = ({ children, ...otherProps }) => {
	return <form {...otherProps}>{children}</form>;
};

export default FormGroup;
