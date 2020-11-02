import config from './config.js';

const Data = (() => {

    const api = (path, method='GET', body=null, requiresAuth=false, credentials=null) => {
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
            options.headers['Authorization'] = `Basic ${encodedCredentials}`;
        }
        return fetch(url, options);
    }

    const createUser = async (newUser) => {
        const response = await api('/register', 'POST', newUser);
        if (response.status === 201) {
            return [];
        }
        else if (response.status === 400) {
            return response.json();
        } else {
            throw new Error();
        }
    }

    const getUser = async (credentials) => {
        const response = await api(`/user/${credentials.username}`, 'GET', null, true, credentials);
        if (response.status === 200) {
            return response.json().then(data => data);
        }
        else if (response.status === 401) {
            return null;
        } else {
            throw new Error();
        }
    }

    return {createUser, getUser}


})();

export default Data;