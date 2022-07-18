import { iComic } from '../interfaces/iComics';
import { getToken } from '../utils/getToken';

export class ComicHttpStore {
    apiUrl: string;
    constructor() {
        this.apiUrl = 'http://localhost:3400/comic/';
    }

    getAllComics(): Promise<Array<iComic>> {
        return fetch(this.apiUrl).then((resp) => resp.json());
    }

    getComic(id: iComic['_id']): Promise<iComic> {
        return fetch(this.apiUrl + id.toString()).then((resp) => resp.json());
    }
    getComicByName(name: iComic['name']): Promise<Array<iComic>> {
        return fetch(this.apiUrl + 'search?q=' + name).then((resp) =>
            resp.json()
        );
    }
    scoreComic(comicId: string, score: number): Promise<iComic> {
        const token = getToken();

        return fetch(this.apiUrl + 'score/' + comicId, {
            method: 'PATCH',
            body: JSON.stringify({ score: score }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token,
            },
        }).then((resp) => resp.json());
    }
}
