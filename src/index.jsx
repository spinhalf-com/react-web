import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import MainContainerEnter from './components/main-container-enter';
import MainContainerReconcile from './components/main-container-reconcile';
import MainContainerRegtrans from './components/main-container-regtrans';
import MainContainerMileage from './components/main-container-mileage';
import MainContainerMap from './components/main-container-map';

import './css/main.css';
import './css/jfrzapple.css';

const Routed = (
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
    Routed,
    document.getElementById('root')
);