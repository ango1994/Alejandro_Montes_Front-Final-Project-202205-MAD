export interface iArtist {
    id: string;
    name: string;
    about: string;
    image: string;
    rol: 'writer' | 'cartoonist';
    comics: Array<string>;
}
