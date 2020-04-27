import React from 'react';

import FormGroup from '../form-group/FormGroup';
import Input from '../input/Input';
import Button from '../buttons/Button';

function RenderLogin({ values, handleOnChange, handleOnSubmit }) {
	return (
		<div className="login">
			<FormGroup onSubmit={handleOnSubmit} className="form-wrapper">
				<Input
					onChange={handleOnChange}
					value={values.email}
					className="input__card"
					type="text"
					placeholder="Email"
					name="email"
				/>
				<Input
					onChange={handleOnChange}
					value={values.password}
					type="password"
					placeholder="Password"
					className="input__card"
					name="password"
				/>
				<p>Forgot your password?</p>
				<div className="button-wrapper">
					<Button
						type="submit"
						name="Login"
						className="rounded-button continue-button red-button"
					/>
				</div>
			</FormGroup>
		</div>
	);
}

export default RenderLogin;
