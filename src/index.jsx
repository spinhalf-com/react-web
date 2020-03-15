import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from './store/index';

import { Route, BrowserRouter as Router } from 'react-router-dom';

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import rootReducer from './store/reducers/index';
import MainContainerEnter from './components/enter/main-container-enter';
import MainContainerReconcile from './components/reconcile/main-container-reconcile';
import MainContainerRegtrans from './components/regtrans/main-container-regtrans';
import MainContainerMileage from './components/mileage/main-container-mileage';
import MainContainerMap from './components/map/main-container-map';
import Login from './components/login';

// const createdStore = applyMiddleware(thunk)(createStore);
// const store = createdStore(rootReducer);

const Routed = (
    <Provider store={configureStore()}>
        <Router>
            <div>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/enter" component={MainContainerEnter} />
                <Route path="/reconcile" component={MainContainerReconcile} />
                <Route path="/regtrans" component={MainContainerRegtrans} />
                <Route path="/mileage" component={MainContainerMileage} />
                <Route path="/map" component={MainContainerMap} />
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(
    Routed,
    document.getElementById('root')
);