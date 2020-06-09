import React from 'react';

import FormGroup from '../form-group/FormGroup';
import Input from '../input/Input';
import Button from '../buttons/Button';
import {
	redButton,
	redButtonHover
} from '../../styles/variables/variables';

const styles = {
	root: {
		width: '268px',
		margin: '0 auto'
	},
	message: {
		paddingBottom: '8px'
	}
};

function RenderLogin({ values, handleOnChange, handleOnSubmit }) {
	return (
		<div style={styles.root}>
			<FormGroup onSubmit={handleOnSubmit}>
				<Input
					onChange={handleOnChange}
					value={values.email}
					type="text"
					placeholder="Email"
					name="email"
				/>
				<Input
					onChange={handleOnChange}
					value={values.password}
					type="password"
					placeholder="Password"
					name="password"
				/>
				<p style={styles.message}>Forgot your password?</p>
				<div className="button-wrapper">
					<Button
						type="submit"
						name="Login"
						variant="rounded"
						color={redButton}
						hover={redButtonHover}
					/>
				</div>
			</FormGroup>
		</div>
	);
}

export default RenderLogin;
