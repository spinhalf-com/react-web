import { combineReducers } from "redux";
import cryptos from "./cryptos";
import accounts from "./accounts";
import defaults from "./defaults";

export default combineReducers({
    cryptos,
    accounts,
    defaults
});