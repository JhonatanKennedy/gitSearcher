import React from 'react';
import Bookmarks from '../../components/Bookmarks/Bookmarks';
import { render } from '@testing-library/react';

describe('Bookmarks component', () => {
    it('Should be able to store history', () => {
        const { debug } = render(<Bookmarks/>);

        debug();

    });
});