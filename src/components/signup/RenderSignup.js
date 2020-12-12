import React from 'react';

import FormGroup from '../form-group/FormGroup';
import Input from '../input/Input';
import Button from '../buttons/Button';
import { redButton, redButtonHover } from '../../styles';

const styles = {
	root: {
		width: '268px',
		margin: '0 auto'
	}
};

function RenderSignup({ values, handleOnChange, handleOnSubmit }) {
	return (
		<div style={styles.root}>
			<FormGroup onSubmit={handleOnSubmit}>
				<Input
					value={values.email}
					onChange={handleOnChange}
					type="text"
					placeholder="Email"
					name="email"
				/>
				<Input
					value={values.password}
					onChange={handleOnChange}
					type="password"
					placeholder="Password"
					name="password"
				/>
				<Input
					value={values.name}
					onChange={handleOnChange}
					type="text"
					placeholder="Name"
					name="name"
				/>
				<div className="button-wrapper">
					<Button
						type="submit"
						name="Continue"
						variant="rounded"
						color={redButton}
						hover={redButtonHover}
					>
						Continue
					</Button>
				</div>
			</FormGroup>
		</div>
	);
}

export default RenderSignup;
