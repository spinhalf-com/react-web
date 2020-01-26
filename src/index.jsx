import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "./store";

import MainContainer from './components/common/main-container';
import './css/main.css';
import './css/jfrzapple.css';
const store = configureStore({});

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <MainContainer/>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);