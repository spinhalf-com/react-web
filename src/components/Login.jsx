import React, { Component } from 'react';
import '../css/login.css';
import axios from 'axios';
import config from '../config/config';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: '',
            loginUrl: config.API_URL + 'oauth/token'
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }

    handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }
        this.fetchData();

        return this.setState({ error: '' });
    }

    fetchData() {

        let data = JSON.stringify({
            password: this.state.password,
            username: this.state.email
        });

        axios.post(this.state.loginUrl, data)
            .then(response => {
                this.setState({
                    oauthToken: response.data.access_token,
                    loading: false,
                    error: null
                });
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: err
                });
            });
    }

    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }

    render() {
        // NOTE: I use data-attributes for easier E2E testing
        // but you don't need to target those (any css-selector will work)

        return (
            <div className="Login box">
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.error &&
                        <h3 data-test="error" onClick={this.dismissError}>
                            <button onClick={this.dismissError}>✖</button>
                            {this.state.error}
                        </h3>
                    }
                    <input placeholder="Enter email" className="email" type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

                    <input placeholder="Enter password" className="password" type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

                    <input className="btn" type="submit" value="Log In" data-test="submit" />
                </form>
            </div>
        );
    }
}

export default LoginPage;