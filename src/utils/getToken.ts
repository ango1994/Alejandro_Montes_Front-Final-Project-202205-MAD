export function getToken() {
    const user = localStorage.getItem('user');
    if (user) {
        return JSON.parse(user);
    }
}
