import constants from '../constants/auth';

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: true,
};

export default function location(state = initialState, action) {
    switch (action.type) {
        case constants.SET_AUTH_LOADING:
            return Object.assign({}, state, {
                loading: action.payload,
            });
        case constants.SET_CURRENT_USER:
            return Object.assign({}, state, {
                user: action.data,
                loading: false,
                isAuthenticated: true,
            });
        case constants.AUTH_FAIL:
            return Object.assign({}, state, {
                user: null,
                loading: false,
                isAuthenticated: false,
            });
        default:
            return state;
    }
}
