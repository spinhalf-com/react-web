import { transactionsConstants } from '../constants/transactions';

const initialState = {
    transactions_array: [],
    selectedEntries: [],
    queryString: null,
    matching_description_data: []
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

        case transactionsConstants.GET_TRANSACTION_SEARCH_QUERY:
            return state.queryString;

        case transactionsConstants.SET_TRANSACTION_SEARCH_QUERY:
            return Object.assign({}, state, {
                queryString: action.data
            });
            return state;

        case transactionsConstants.UPDATE_TRANSACTIONS_TICKLIST:
            let checkedState = [...state];
            checkedState.map((item) => {
                if (item[0] === action.data[0]) {
                    item = action.data;
                }
                return item;
            });
            return checkedState;

        case transactionsConstants.SET_TRANSACTIONS_SELECTED_ENTRIES:
            return Object.assign({}, state, {
                selectedEntries: action.data
            });

        case transactionsConstants.SET_MATCHING_DESCRIPTION_DATA:
            return Object.assign({}, state, {
                matching_description_data: action.data
            });
        default:
            return state;
    }
}

function currency(value) {
    if(isNaN(value) || value === null || value === "") {
        return 0;
    }
    return parseFloat(value)
}