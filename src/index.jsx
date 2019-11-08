import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/enter/main';
import './css/main.css';
import './css/jfrzapple.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {renderChild: true};
        // this.handleChildUnmount = this.handleChildUnmount.bind(this);
    }

    render() {
        return (
            <div className="app" id="main_container">
                <Header title="Header" />
                <Main />
                <Footer title="Footer"/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);