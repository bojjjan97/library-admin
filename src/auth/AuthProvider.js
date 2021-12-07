// in src/authProvider.js
const authProvider = {
    login: ({ username, password }) =>  {
        const request = new Request(process.env.REACT_APP_AUTHORIZE_URL, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('auth', JSON.stringify(auth));
            })
            .catch((e) => {
                throw new Error(e)
            });
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => localStorage.getItem('auth')
        ? Promise.resolve()
        : Promise.reject(),
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    getIdentity: () => {
        try {
            const { id, name } = JSON.parse(localStorage.getItem('auth'));
            return Promise.resolve({ id, fullName: name, avatar:"" });
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getPermissions: () => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        const role = auth ? auth.role : [];
        return role ? Promise.resolve(role) : Promise.reject();
    }
};

export default authProvider;