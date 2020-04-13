import { reconcileConstants } from '../constants/reconcile';

const initialState = {
    unreconciled_records: [],
    selectedEntries: [],
    reconciled_total: null,
    candidate_total: null,
    running_total: null
};

export default function location(state = initialState, action) {
    switch (action.type) {
        case reconcileConstants.GET_RECONCILE_REQUEST:
            return state;

        case reconcileConstants.GET_RECONCILE_SUCCESS:

            return Object.assign({}, state, {
                unreconciled_records: action.data.records,
                reconciled_total: currency(action.data.totals.reconciled).toFixed(2),
                unreconciled_total: currency(action.data.totals.unreconciled).toFixed(2),
                candidate_total: currency(action.data.totals.unconfirmed).toFixed(2),
                running_total: (currency(action.data.totals.reconciled) + currency(action.data.totals.unconfirmed)).toFixed(2)
            });

        case reconcileConstants.GET_RECONCILE_FAILURE:
            return action.error;

        case reconcileConstants.UPDATE_RECONCILE_TICKLIST:
            let checkedState = [...state];
            checkedState.map((item) => {
                if (item[0] === action.data[0]) {
                    item = action.data;
                }
                return item;
            });
            return checkedState;

        case reconcileConstants.SET_RECONCILE_SELECTED_ENTRIES:
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