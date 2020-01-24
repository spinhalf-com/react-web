import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './store/reducers/reducers-index';
import MainContainerEnter from './components/main-container-enter';
import MainContainerReconcile from './components/main-container-reconcile';
import MainContainerRegtrans from './components/main-container-regtrans';
import MainContainerMileage from './components/main-container-mileage';
import MainContainerMap from './components/main-container-map';
import Login from './components/Login';

const createdStore = applyMiddleware(thunk)(createStore);
const store = createdStore(rootReducer);

const Routed = (
    <Provider store={store}>
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