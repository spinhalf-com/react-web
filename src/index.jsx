import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from "react-redux";
// import store from "./redux/store";

import MainContainer from './components/main-container';
import './css/main.css';
import './css/jfrzapple.css';

class App extends Component {

    render() {
        return (
            <MainContainer/>
        );
    }
    // render() {
    //     return (
    //         <Provider store={store}>
    //             <MainContainer/>
    //         </Provider>
    //     );
    // }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);