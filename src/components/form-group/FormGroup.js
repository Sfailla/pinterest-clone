import React from 'react';

const FormGroup = ({ children, onSubmit }) => {
	return <form onSubmit={onSubmit}>{children}</form>;
};

export default FormGroup;
