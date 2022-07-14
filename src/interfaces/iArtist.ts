import { iComic } from './iComics';

export interface iArtist {
    id: string;
    name: string;
    about: string;
    image: string;
    rol: 'writer' | 'cartoonist';
    comics: Array<iComic>;
}
