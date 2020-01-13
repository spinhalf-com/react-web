import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import MainContainerEnter from './components/main-container-enter';
import MainContainerReconcile from './components/main-container-reconcile';
import MainContainerRegtrans from './components/main-container-regtrans';
import MainContainerMileage from './components/main-container-mileage';
import MainContainerMap from './components/main-container-map';

import './css/main.css';
import './css/jfrzapple.css';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={MainContainerEnter} />
            <Route path="/reconcile" component={MainContainerReconcile} />
            <Route path="/regtrans" component={MainContainerRegtrans} />
            <Route path="/mileage" component={MainContainerMileage} />
            <Route path="/map" component={MainContainerMap} />
        </div>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
);