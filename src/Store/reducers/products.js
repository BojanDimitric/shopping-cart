import * as actionTypes from '../actionTypes';

const initialState = {
    loading: false,
    data: null,
    error: null
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_START: 
            return {
                ...state,
                loading: true
            };
        case actionTypes.GET_PRODUCTS_SUCCESS: 
            return {
                ...state,
                loading: false,
                data: action.data,
                error: null
                
            };
        case actionTypes.GET_PRODUCTS_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default: 
            return state;
    };
};

export default productsReducer;