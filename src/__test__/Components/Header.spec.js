import React from 'react';
import Header from '../../components/Header/Header';
import { render } from '@testing-library/react';

jest.mock('react-router-dom', () => {
    return{
        link: jest.fn() 
    };
});

describe('Header component', () => {
    it('Should be able to navigate', () => {
        const { debug } = render(<Header/>); 
        debug();
    })
});