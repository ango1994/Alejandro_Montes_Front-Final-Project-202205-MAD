import { iComic } from '../interfaces/iComics';

export class ComicHttpStore {
    apiUrl: string;
    constructor() {
        this.apiUrl = 'http://localhost:3400/comic/';
    }

    getAllComics(): Promise<Array<iComic>> {
        return fetch(this.apiUrl).then((resp) => resp.json());
    }

    getComic(id: iComic['id']): Promise<iComic> {
        return fetch(this.apiUrl + id.toString()).then((resp) => resp.json());
    }
    getComicByName(name: iComic['name']): Promise<Array<iComic>> {
        return fetch(this.apiUrl + 'search' + name.toString()).then((resp) =>
            resp.json()
        );
    }
    scoreComic(comic: iComic, score: number): Promise<iComic> {
        return fetch(this.apiUrl + 'score' + comic.id, {
            method: 'PATCH',
            body: JSON.stringify({ score: score }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json());
    }
}
