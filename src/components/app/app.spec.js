import React from './node_modules/react';
import { render } from './node_modules/@testing-library/react';
import App from './App';

describe('App', () => {
	it('renders App without error', () => {
		render(<App />);
	});
});
