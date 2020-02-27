import * as actionTypes from '../actionTypes';

const initialState = {
    loading: false,
    data: null,
    error: null
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CART_START: 
            return {
                ...state,
                loading: true
            };
        case actionTypes.GET_CART_SUCCESS: 
            return {
                ...state,
                loading: false,
                data: action.data,
                error: null
            };
        case actionTypes.GET_CART_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case actionTypes.CREATE_CART_START: 
            return {
                ...state,
                loading: true
            };
        case actionTypes.CREATE_CART_SUCCESS: 
            return {
                ...state,
                loading: false,
                error: null
            };
        case actionTypes.CREATE_CART_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case actionTypes.PATCH_ADD_CART_START: 
            return {
                ...state,
                loading: true
            };
        case actionTypes.PATCH_ADD_CART_SUCCESS: 
            return {
                ...state,
                loading: false,
                error: null
            };
        case actionTypes.PATCH_ADD_CART_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case actionTypes.PATCH_REMOVE_CART_START: 
            return {
                ...state,
                loading: true
            };
        case actionTypes.PATCH_REMOVE_CART_SUCCESS: 
            return {
                ...state,
                loading: false,
                error: null
            };
        case actionTypes.PATCH_REMOVE_CART_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case actionTypes.DELETE_CART_START: 
            return {
                ...state,
                loading: true
            };
        case actionTypes.DELETE_CART_SUCCESS: 
            return {
                ...state,
                loading: false,
                error: null
            };
        case actionTypes.DELETE_CART_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default: 
            return state;
    };
};

export default cartReducer;