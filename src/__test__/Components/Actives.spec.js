import React from 'react';
import Actives from '../../components/Actives/Actives';
import { render } from '@testing-library/react';

describe('Actives components', () => {
    it('Should be able to show ranking', () => {
        const { debug } =  render(<Actives/>);
        debug();
    });
})