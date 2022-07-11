import { iComic } from '../interfaces/iComics';
import { ComicHttpStore } from './comic.http.store';

const comic1: iComic = {
    artist: [],
    category: 'american',
    description: '',
    id: '',
    image: '',
    name: '',
    publicationDate: '',
    score: [],
};
const comic2: iComic = {
    artist: [],
    category: 'american',
    description: '',
    id: '',
    image: '',
    name: '',
    publicationDate: '',
    score: [],
};

describe('Given ComicHttpStore', () => {
    describe('When getAllComics is called', () => {
        test('Then it shoul return an array of comics', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue([comic1, comic2]),
            });
            const api = new ComicHttpStore();
            const response = await api.getAllComics();
            expect(response).toEqual([comic1, comic2]);
        });
    });
    describe('When getComics is called', () => {
        test('Then it shoul return a comic', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(comic1),
            });
            const api = new ComicHttpStore();
            const response = await api.getComic('');
            expect(response).toEqual(comic1);
        });
    });
    describe('When getComicsByName is called', () => {
        test('Then it shoul return an array comic', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue([comic1, comic2]),
            });
            const api = new ComicHttpStore();
            const response = await api.getComicByName('');
            expect(response).toEqual([comic1, comic2]);
        });
    });
    describe('When scoreComic is called', () => {
        test('Then it shoul return the updated comic', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({
                    ...comic1,
                    score: [{ user: '', scored: 7 }],
                }),
            });
            const api = new ComicHttpStore();
            const response = await api.scoreComic(comic1.id, 7);
            console.log(response);

            expect(response).toEqual({
                ...comic1,
                score: [{ user: '', scored: 7 }],
            });
        });
    });
});
