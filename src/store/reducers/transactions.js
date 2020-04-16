import { transactionsConstants } from '../constants/transactions';

const initialState = {
    transactions_array: [],
    queryString: null,
    matching_description_data: null
};

export default function location(state = initialState, action) {
    switch (action.type) {
        case transactionsConstants.GET_TRANSACTIONS_REQUEST:
            return state;

        case transactionsConstants.GET_TRANSACTIONS_SUCCESS:
            return Object.assign({}, state, {
                transactions_array: action.data.data
            });

        case transactionsConstants.GET_TRANSACTIONS_FAILURE:
            return action.error;

        case transactionsConstants.SET_TRANSACTION_SEARCH_QUERY:
            return Object.assign({}, state, {
                queryString: action.data
            });

        case transactionsConstants.GET_MATCHING_DESCRIPTION_DATA:
            return Object.assign({}, state, {
                matching_description_data: action.data.data
            });

        case transactionsConstants.CLEAR_MATCHING_DESCRIPTION_DATA:
            return Object.assign({}, state, {
                matching_description_data: null
            });
        default:
            return state;
    }
}

// function currency(value) {
//     if(isNaN(value) || value === null || value === "") {
//         return 0;
//     }
//     return parseFloat(value)
// }