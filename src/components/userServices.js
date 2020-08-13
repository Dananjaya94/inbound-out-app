// import config from 'config';
// import { authHeader } from './_helpers';

var user;
export const userService = {
    login,
    logout,
    getUser,
    getPassword
    // getAll
};

function login(username, password) {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    // };

    localStorage.setItem('user', JSON.stringify(username));
    localStorage.setItem('pass',JSON.stringify(password));

    console.log(JSON.parse(localStorage.getItem('user')));
    console.log(JSON.parse(localStorage.getItem('pass')));
    
    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    //     .then(handleResponse)
    //     .then(user => {
    //         // login successful if there's a user in the response
    //         if (user) {
    //             // store user details and basic auth credentials in local storage 
    //             // to keep user logged in between page refreshes
    //             user.authdata = window.btoa(username + ':' + password);
    //             localStorage.setItem('user', JSON.stringify(user));
    //         }

    //         return user;
    //     });
}

function getUser(){
    var us = JSON.parse(localStorage.getItem('user'));

    return us;
}

function getPassword(){
    var pw = JSON.parse(localStorage.getItem('pass'))

    return pw;
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
// }

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}