import config from './config.js';

const Data = (() => {

    const api = (path, method='GET', body=null, requiresAuth=false, credentials=null) {
        const url = config.apiBaseUrl + path;
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }
        if(body !== null) {
            options.body = JSON.stringify(body);
        }
        if (requiresAuth) {
            const encodedCredentials = btoa(`${credentials.username}:${credentials.password}`);
            options.headers['Authorization'] = `Basic ${encodedCredentails}`;
        }
        return fetch(url, options);
    }

    const createUser = async (user) => {
        const response = await api('/register', 'POST', user);
        if (response.status === 201) {
            return [];
        }
        else if (response.status === 400) {
            return response.json().then(data => data.error)
        } else {
            throw new Error();
        }
    }


})();

export default Data;