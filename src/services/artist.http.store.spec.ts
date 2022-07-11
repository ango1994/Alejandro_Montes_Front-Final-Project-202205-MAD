import { iArtist } from '../interfaces/iArtist';
import { ArtistHttpStore } from './artist.http.store';

const artist1: iArtist = {
    about: '',
    comics: [],
    id: '',
    image: '',
    name: '',
    rol: 'writer',
};
const artist2: iArtist = {
    about: '',
    comics: [],
    id: '',
    image: '',
    name: '',
    rol: 'writer',
};

describe('Given ArtistHttpStore', () => {
    describe('When getAllArtists is called', () => {
        test('Then it shoul return an array of artists', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue([artist1, artist2]),
            });
            const api = new ArtistHttpStore();
            const response = await api.getAllArtists();
            expect(response).toEqual([artist1, artist2]);
        });
    });
    describe('When getArtists is called', () => {
        test('Then it shoul return an artists', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(artist1),
            });
            const api = new ArtistHttpStore();
            const response = await api.getArtist('');
            expect(response).toEqual(artist1);
        });
    });
});
