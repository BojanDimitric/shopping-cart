import * as actionTypes from '../actionTypes';

const axios = require('axios').default;

const authStart = () => ({
    type: actionTypes.AUTH_START
});

const authSuccess = (token) => ({
    type: actionTypes.AUTH_SUCCESS,
    token
});

const authFail = error => ({
    type: actionTypes.AUTH_FAIL,
    error
});

export const auth = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        const data = {
            username, 
            password
        };
        const url = 'https://supermarket-test.digitalcube.rs/user/login';
        axios.post(url, data)
            .then(res => {
                localStorage.setItem('token', res.data.token); 
                const expiry = new Date(new Date().getTime() + 1 * 60 * 60 * 1000);
                localStorage.setItem('expiry', expiry);
                dispatch(authSuccess(res.data.token));
                dispatch(authTimeout(1 * 60 * 60 * 1000));
            })
            .catch(err => dispatch(authFail(err.message)));
    };
};

const authLogoutStart = () => ({
    type: actionTypes.AUTH_LOGOUT_START
});

const authLogoutSuccess = () => ({
    type: actionTypes.AUTH_LOGOUT_SUCCESS
});

const authLogoutFail = error => ({
    type: actionTypes.AUTH_LOGOUT_FAIL,
    error
});

export const logout = token => {
    return dispatch => {
        console.log('Logout!');
        dispatch(authLogoutStart());
        const auth = {
            Authorization: token
        };
        const url = 'https://supermarket-test.digitalcube.rs/user/logout';
        axios.post(url, {
            headers: auth
        })
            .then(res => dispatch(authLogoutSuccess()))
            .catch(err => dispatch(authLogoutFail(err.message)));
        localStorage.removeItem('token');
        localStorage.removeItem('expiry');
    };
};

const authTimeout = timeout => {
    return dispatch => {
        setTimeout(() => dispatch(logout()), timeout);
    };
};

export const auto = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expiry = new Date(localStorage.getItem('expiry'));
            if (expiry.getTime() <= new Date().getTime()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(authTimeout(expiry.getTime() - new Date().getTime()));
            }
        };
    };
};