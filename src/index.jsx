import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MainContainer from './components/main-container';
import Parent from './components/test/test2';
import './css/main.css';
import './css/jfrzapple.css';

class App extends Component {

    render() {
        return (
            <div>
                <Parent/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);