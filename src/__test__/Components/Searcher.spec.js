import React from 'react';
import Searcher from '../../components/Searcher/Searcher';
import { render, fireEvent } from '@testing-library/react';


describe('Searcher component', () => {
    it('Should be able to search users', () => {
        const { getByPlaceholderText, getByTitle } = render(<Searcher/>);

        const userField = getByPlaceholderText('Digite o usuário');
        const buttonElement = getByTitle('button');


        fireEvent.change(userField, {target: { value: 'userTest' }});
        fireEvent.click(buttonElement);

    });
});