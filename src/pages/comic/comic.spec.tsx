import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { iArtist } from '../../interfaces/iArtist';
import Comic from './comic';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
        pathname: 'localhost:3000/example/path',
        state: {
            comic: {
                artist: [] as Array<iArtist>,
                category: 'american',
                description: '',
                _id: '239832',
                image: '',
                name: '234234',
                publicationDate: '',
            },
        },
    }),
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

describe('Given the componen Comic', () => {
    describe('When it is called with props', () => {
        test('Then it should render the comic page', () => {
            const mockUseDispatch = jest.fn();

            (useDispatch as jest.Mock).mockReturnValue(mockUseDispatch);
            (useSelector as jest.Mock).mockReturnValue([
                { _id: '239832', score: [{ user: '', scored: 7 }] },
            ]);
            useLocation();
            render(
                <MemoryRouter>
                    <Comic></Comic>
                </MemoryRouter>
            );
            const element = screen.getByText('Artist');
            expect(element).toBeInTheDocument();
        });
    });
    describe('When it is called without props', () => {
        test('Then it should navigate home', () => {
            const mockUseDispatch = jest.fn();

            (useDispatch as jest.Mock).mockReturnValue(mockUseDispatch);
            (useSelector as jest.Mock).mockReturnValue([
                { _id: '239832', score: [{ user: '', scored: 7 }] },
            ]);

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
