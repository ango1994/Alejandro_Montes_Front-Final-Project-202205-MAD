import { iUser, userWithToken } from '../interfaces/iUser';

export class UserHttpStore {
    apiUrl: string;
    constructor() {
        this.apiUrl = 'http://localhost:3400/user/';
    }

    registerUser(user: iUser): Promise<iUser> {
        return fetch(this.apiUrl, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json());
    }

    loginUser(user: Partial<iUser>): Promise<userWithToken> {
        return fetch(this.apiUrl + 'login', {
            method: 'POST',
            body: JSON.stringify({ name: user.name, password: user.password }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json());
    }

    deleteUser(userId: string, token: string): Promise<iUser> {
        return fetch(this.apiUrl + 'delete/' + userId, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((resp) => resp.json());
    }

    updateUser(userId: string, comicId: string): Promise<iUser> {
        return fetch(this.apiUrl + userId, {
            method: 'PATCH',
            body: JSON.stringify({ comic: comicId }),
        }).then((resp) => resp.json());
    }
}
