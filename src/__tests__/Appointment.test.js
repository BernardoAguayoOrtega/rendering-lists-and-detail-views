import React from 'react'
import { render } from '@testing-library/react';
import { Appointment } from '../Appointment';

describe('Appointment', () => {
	it('renders the customer first name', () => {
		const customer = { firstName: 'Bernardo Aguayo' };
		const { container } = render(<Appointment customer={customer} />);
		expect(container.textContent).toMatch('Bernardo Aguayo');
	});
});
