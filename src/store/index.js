import { createStore, applyMiddleware, compose, composeEnhancers } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const configureStore = initialState => {
  const middlewares = [thunk];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  //middlewares.push(require("redux-logger").createLogger({ collapsed: true }));

  const store = createStore(
    reducers,
    initialState,
    // composeEnhancers(applyMiddleware(...middlewares))
    compose( applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );
  return store;
};
export default configureStore;