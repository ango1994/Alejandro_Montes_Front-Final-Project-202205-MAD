export interface userWithToken {
    token: string;
    user: iUser;
}
export interface iUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    comics?: Array<string>;
}
