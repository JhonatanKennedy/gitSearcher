import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import { render } from '@testing-library/react';

describe('Dashboard component', () => {
    it('Should show repositories',() => {
        const { debug } = render(<Dashboard/>);
    });
});