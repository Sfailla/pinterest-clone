import React, { useState } from 'react';

import FormGroup from '../form-group/FormGroup';
import Input from '../input/Input';
import Button from '../buttons/Button';

function RenderSignup({ values, handleOnChange, handleOnSubmit }) {
	return (
		<div className="signup">
			<FormGroup onSubmit={handleOnSubmit} className="form-wrapper">
				<Input
					value={values.email}
					onChange={handleOnChange}
					className="input__card"
					type="text"
					placeholder="Email"
					name="email"
				/>
				<Input
					value={values.password}
					onChange={handleOnChange}
					type="password"
					placeholder="Password"
					className="input__card"
					name="password"
				/>
				<Input
					value={values.name}
					onChange={handleOnChange}
					type="text"
					className="input__card"
					placeholder="Name"
					name="name"
				/>
				<div className="button-wrapper">
					<Button
						type="submit"
						name="Continue"
						className="rounded-button continue-button red-button"
					/>
				</div>
			</FormGroup>
		</div>
	);
}

export default RenderSignup;
