import { createStore } from "redux";
import rootReducer from "./reducers/reducers-index";
const store = createStore(rootReducer);
export default store;