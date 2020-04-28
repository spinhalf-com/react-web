import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import Routes from './routes';

const store = configureStore();

const Routed = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
};

ReactDOM.render(<Routed />, document.getElementById('root'));
