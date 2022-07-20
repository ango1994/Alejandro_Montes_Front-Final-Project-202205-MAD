import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { iArtist } from '../../interfaces/iArtist';
import Comic from './comic';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
        pathname: 'localhost:3000/example/path',
        state: {
            comics: {
                artist: [] as Array<iArtist>,
                category: 'american',
                description: '',
                _id: '',
                image: '',
                name: '',
                publicationDate: '',
            },
        },
    }),
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

describe('Given the componen Comic', () => {
    describe('When it is called with a user token', () => {
        test.skip('Then it should render mycomix page', () => {
            const mockUseSelector = jest.fn();
            (useSelector as jest.Mock).mockReturnValue(mockUseSelector);
            render(
                <MemoryRouter>
                    <Comic></Comic>
                </MemoryRouter>
            );
            const element = screen.getByText('Artist');
            expect(element).toBeInTheDocument();
        });
    });
});
