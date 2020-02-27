import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';

import authReducer from './Store/reducers/auth';
import productsReducer from './Store/reducers/products';
import cartReducer from './Store/reducers/cart'

import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
