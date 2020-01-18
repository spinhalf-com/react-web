import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
            loginUrl: config.API_URL + 'oauth/token',
            loginCredentials: {
                username: '',
                password: '',
                client_id: config.CLIENT_ID,
                client_secret: config.CLIENNT_SECRET,
                scope: config.SCOPE,
                grant_type: config.GRANT_TYPE
            },
            redirect: null,
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

        let loginObj = this.state.loginCredentials;
        loginObj.username = this.state.username;
        loginObj.password = this.state.password;

        this.setState({
            loginCredentials: loginObj
        });
        this.postData();

        return this.setState({ error: '' });
    }

    postData() {
        let data = this.state.loginCredentials;

        axios.post(this.state.loginUrl, data).then(response => {
            this.handleSuccess(response);
        }).catch(error => {
            this.handleError(error)
        });
    }

    handleSuccess(response) {
        this.setState({
            oauthToken: response.access_token,
            loading: false,
            error: null,
            redirect: '/enter'
        });
        localStorage.setItem('oauthToken', response.access_token);
    }

    handleError(error) {
        this.setState({
            loading: false,
            error: true,
            error_message: "Login failed.",
            redirect: null
        });
    }

    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    }

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div className="Login box">
                <div className="form-box">
                    <form onSubmit={this.handleSubmit}>
                        {
                            this.state.error &&
                            <h3 data-test="error" onClick={this.dismissError}>
                                <button onClick={this.dismissError}>✖</button>
                                {this.state.error_message}
                            </h3>
                        }
                        <input placeholder="Enter email" className="email" type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

                        <input placeholder="Enter password" className="password" type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

                        <input className="btn" type="submit" value="Log In" data-test="submit" />

                    </form>
                </div>
            </div>
        );
    }
}

export default LoginPage;