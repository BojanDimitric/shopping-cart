import * as actionTypes from '../actionTypes';

const axios = require('axios').default;

const getProductsStart = () => ({
    type: actionTypes.GET_PRODUCTS_START
});

const getProductsSuccess = data => ({
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    data
});

const getProductsFail = error => ({
    type: actionTypes.GET_PRODUCTS_FAIL,
    error
});

export const getProducts = url => {
    return dispatch => {
        dispatch(getProductsStart());
        axios.get(url)
            .then(res => dispatch(getProductsSuccess(res.data)))
            .catch(err => dispatch(getProductsFail(err.message)));
    };
};