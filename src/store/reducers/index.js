import { combineReducers } from "redux";
import cryptos from "./cryptos";
import accounts from "./accounts";
import defaults from "./defaults";
import regtrans from './regtrans';
import reconcile from './reconcile';
import transactions from './transactions';

export default combineReducers({
    cryptos,
    accounts,
    defaults,
    regtrans,
    reconcile,
    transactions
});