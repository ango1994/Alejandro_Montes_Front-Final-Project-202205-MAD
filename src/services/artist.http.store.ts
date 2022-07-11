import { iArtist } from '../interfaces/iArtist';

export class ArtistHttpStore {
    apiUrl: string;
    constructor() {
        this.apiUrl = 'http://localhost:3400/artist/';
    }

    getAllArtists(): Promise<Array<iArtist>> {
        return fetch(this.apiUrl).then((resp) => resp.json());
    }

    getArtist(id: iArtist['id']): Promise<iArtist> {
        return fetch(this.apiUrl + id.toString()).then((resp) => resp.json());
    }
}
