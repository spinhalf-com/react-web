import { combineReducers } from "redux";
import cryptos from "./cryptos";
import accounts from "./accounts";

export default combineReducers({
    cryptos,
    accounts
});