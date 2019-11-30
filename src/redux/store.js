import { combineReducers, createStore } from 'redux';

// actions.js
export const cryptoValues = cryptos => ({
    type: 'CRYPTO_VALUES',
    cryptos,
});

// reducers.js
export const cryptos = (state = {}, action) => {
    switch (action.type) {
        case 'CRYPTO_VALUES':
            return action.cryptos;
        default:
            return state;
    }
};

export const reducers = combineReducers({
    cryptos,
});

// store.js
export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();