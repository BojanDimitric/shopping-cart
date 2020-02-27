import * as actionTypes from '../actionTypes';

const initialState = {
    loading: false,
    token: null,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: 
            return {
                ...state,
                loading: true
            };
        case actionTypes.AUTH_SUCCESS: 
            return {
                ...state,
                loading: false,
                token: action.token,
                error: null
            };
        case actionTypes.AUTH_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case actionTypes.AUTH_LOGOUT_START: 
            return {
                ...state,
                loading: true
            };
        case actionTypes.AUTH_LOGOUT_SUCCESS: 
            return {
                ...state,
                loading: false,
                token: null,
                error: null
            };
        case actionTypes.AUTH_LOGOUT_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default: 
            return state;
    };
};

export default authReducer;