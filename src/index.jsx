import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from './store/index';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import MainContainerEnter from './components/enter/main-container-enter';
import MainContainerReconcile from './components/reconcile/main-container-reconcile';
import MainContainerRegtrans from './components/regtrans/main-container-regtrans';
import MainContainerMileage from './components/mileage/main-container-mileage';
import MainContainerMap from './components/map/main-container-map';
import MainContainerFitbit from './components/fitbit/main-container-fitbit';
import MainContainerUnits from './components/units/main-container-units';
import MainContainerFood from './components/food/main-container-food';
import Login from './components/login';

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
                <Route path="/food" component={MainContainerFood} />
                <Route path="/units" component={MainContainerUnits} />
                <Route path="/fitbit" component={MainContainerFitbit} />
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(
    Routed,
    document.getElementById('root')
);