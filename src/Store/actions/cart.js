import * as actionTypes from '../actionTypes';

const axios = require('axios').default;

const url = 'https://supermarket-test.digitalcube.rs/api/cart';

const getCartStart = () => ({
    type: actionTypes.GET_CART_START
});

const getCartSuccess = data => ({
    type: actionTypes.GET_CART_SUCCESS,
    data
});

const getCartFail = error => ({
    type: actionTypes.GET_PRODUCTS_FAIL,
    error
});

export const getCart = token => {
    return dispatch => {
        dispatch(getCartStart());
        const auth = {
            Authorization: token
        };
        axios.get(url, {
            headers: auth
        })
            .then(res => dispatch(getCartSuccess(res.data)))
            .catch(err => dispatch(getCartFail(err.message)));
    };
};

const createCartStart = () => ({
    type: actionTypes.CREATE_CART_START
});

const createCartSuccess = () => ({
    type: actionTypes.CREATE_CART_SUCCESS
});

const createCartFail = error => ({
    type: actionTypes.CREATE_CART_FAIL,
    error
});

export const createCart = token => {
    return dispatch => {
        dispatch(createCartStart());
        const auth = {
            Authorization: token
        };
        axios.put(url, {
            headers: auth
        })
            .then(res => dispatch(createCartSuccess()))
            .catch(err => dispatch(createCartFail(err.message)));
    };
};

const patchAddCartStart = () => ({
    type: actionTypes.PATCH_ADD_CART_START
});

const patchAddCartSuccess = () => ({
    type: actionTypes.PATCH_ADD_CART_SUCCESS
});

const patchAddCartFail = error => ({
    type: actionTypes.PATCH_ADD_CART_FAIL,
    error
});

export const patchAddCart = (token, data) => {
    return dispatch => {
        dispatch(patchAddCartStart());
        const auth = {
            Authorization: token
        };
        axios.patch(url, data, {
            headers: auth
        })
            .then(res => dispatch(patchAddCartSuccess()))
            .catch(err => dispatch(patchAddCartFail(err.message)));
    };
};

const patchRemoveCartStart = () => ({
    type: actionTypes.PATCH_REMOVE_CART_START
});

const patchRemoveCartSuccess = () => ({
    type: actionTypes.PATCH_REMOVE_CART_SUCCESS
});

const patchRemoveCartFail = error => ({
    type: actionTypes.PATCH_REMOVE_CART_FAIL,
    error
});

export const patchRemoveCart = (token, data) => {
    return dispatch => {
        dispatch(patchRemoveCartStart());
        const auth = {
            Authorization: token
        };
        axios.patch(url, data, {
            headers: auth
        })
            .then(res => dispatch(patchRemoveCartSuccess()))
            .catch(err => dispatch(patchRemoveCartFail(err.message)));
    };
};

const deleteCartStart = () => ({
    type: actionTypes.DELETE_CART_START
});

const deleteCartSuccess = () => ({
    type: actionTypes.DELETE_CART_SUCCESS
});

const deleteCartFail = error => ({
    type: actionTypes.DELETE_CART_FAIL,
    error
});

export const deleteCart = token => {
    return dispatch => {
        dispatch(deleteCartStart());
        const auth = {
            Authorization: token
        };
        axios.delete(url, {
            headers: auth
        })
            .then(res => dispatch(deleteCartSuccess()))
            .catch(err => dispatch(deleteCartFail(err.message)));
    };
};