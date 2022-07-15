import { iArtist } from './iArtist';

export interface iComic {
    id: string;
    _id?: string;
    name: string;
    image: string;
    description: string;
    publicationDate: string;
    category: 'american' | 'european' | 'manga';
    artist: Array<iArtist>;
    score: Array<{ user: string; scored: number }>;
}
