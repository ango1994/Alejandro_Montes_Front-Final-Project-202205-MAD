import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { iComic } from '../../interfaces/iComics';
import { SearchResult } from './search.result';

describe('Given the component PictureRecipe', () => {
    describe('When it is called and recive by props a recipe', () => {
        test('Then it a render img with link', () => {
            let comic: iComic = {
                _id: '',
                artist: [],
                category: 'american',
                description: '',
                image: '',
                name: 'test',
                publicationDate: '',
                score: [],
            };
            render(
                <MemoryRouter>
                    <SearchResult comic={comic}></SearchResult>
                </MemoryRouter>
            );

            let display = screen.getByText('test');
            expect(display).toBeInTheDocument();
        });
    });
});
