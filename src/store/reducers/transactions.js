import { transactionsConstants } from '../constants/transactions';

const initialState = {
    transactions_array: [],
    selectedEntries: []
};

export default function location(state = initialState, action) {
    switch (action.type) {
        case transactionsConstants.GET_TRANSACTIONS_REQUEST:
            return state;

        case transactionsConstants.GET_TRANSACTIONS_SUCCESS:

            return Object.assign({}, state, {
                unreconciled_records: action.data.records
            });

        case transactionsConstants.GET_TRANSACTIONS_FAILURE:
            return action.error;

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