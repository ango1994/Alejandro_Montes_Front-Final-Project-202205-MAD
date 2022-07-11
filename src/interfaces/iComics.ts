export interface iComic {
    id: string;
    name: string;
    image: string;
    description: string;
    publicationDate: string;
    category: 'american' | 'european' | 'manga';
    artist: Array<string>;
    score: Array<{ user: string; scored: number }>;
}
