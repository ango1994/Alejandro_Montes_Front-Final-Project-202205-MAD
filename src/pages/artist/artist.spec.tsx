import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Artist from './artist';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
        pathname: 'localhost:3000/example/path',
        state: {
            artist: {
                about: '',
                comics: [{}, {}],
                id: '',
                image: '',
                name: 'test',
                rol: 'cartoonist',
            },
        },
    }),
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

describe('Given the component Artist', () => {
    describe('When it is called', () => {
        test('Then it should render the artist page', () => {
            const mockUseSelector = jest.fn();
            (useSelector as jest.Mock).mockReturnValue(mockUseSelector);

            render(
                <MemoryRouter>
                    <Artist></Artist>
                </MemoryRouter>
            );

            const text = screen.getByAltText(/test/i);
            expect(text).toBeInTheDocument();
        });
    });
});
