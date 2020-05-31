import React, { Component } from 'react';
import { connect } from 'react-redux';
import { accounts } from '../../store/actions/accounts';
import { logout } from '../../store/actions/auth';

class Menu extends Component {
    constructor(props) {
        super(props);

        // this.logoutPath = config.API_URL + config.API_PREFIX + 'logout';
        // this.homePath = config.API_URL + config.API_PREFIX + 'enter';
        // this.enterPath = config.API_URL + config.API_PREFIX + 'enter';
        // this.reconcilePath = config.API_URL + config.API_PREFIX + 'reconcile';
        // this.regtransPath = config.API_URL + config.API_PREFIX + 'regtrans';
        // this.mileagePath = config.API_URL + config.API_PREFIX + 'mileage';
        // this.pedometerPath = config.API_URL + config.API_PREFIX + 'pedometer';
        this.logoutPath = '/logout';
        this.homePath = '/enter';
        this.enterPath = '/enter';
        this.reconcilePath = '/reconcile';
        this.regtransPath = '/regtrans';
        this.mileagePath = '/mileage';
        this.pedometerPath = '/pedometer';
        this.unitsPath = '/units';
        this.foodPath = '/food';
        this.fitbitPath = '/fitbit';
    }

    render() {
        return (
            <div className='menu'>
                <ul style={{ align: 'center' }}>
                    <li>
                        <font color='white' size='2em'>
                            Personal Finance Manager
                        </font>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </li>
                    <li>
                        <a
                            className='current'
                            href='/#'
                            onClick={() => this.props.authLogout()}
                        >
                            Log Out
                        </a>
                        <ul>
                            <form
                                id='logout-form'
                                action='https://jfr.zapple.co/logout'
                                method='POST'
                                style={{ display: 'none' }}
                            >
                                <input
                                    type='hidden'
                                    name='_token'
                                    value='8EnnVMORtLXH9krA1OfLFdHOPVPYN4ZScrpXHQz9'
                                />
                            </form>
                        </ul>
                    </li>
                    <li>
                        <a className='current' href={this.homePath}>
                            Home
                        </a>
                        <ul></ul>
                    </li>
                    <li>
                        <a className='current' href={this.enterPath}>
                            Enter
                        </a>
                        <ul></ul>
                    </li>
                    <li>
                        <a className='current' href={this.reconcilePath}>
                            Reconcile
                        </a>
                        <ul></ul>
                    </li>
                    <li>
                        <a className='current' href={this.regtransPath}>
                            Regular Transactions
                        </a>
                        <ul></ul>
                    </li>
                    <li>
                        <a className='current' href={this.mileagePath}>
                            Mileage
                        </a>
                        <ul></ul>
                    </li>
                    <li>
                        <a className='current' href={this.foodPath}>
                            Food
                        </a>
                        <ul></ul>
                    </li>
                    <li>
                        <a className='current' href={this.unitsPath}>
                            Units
                        </a>
                        <ul></ul>
                    </li>
                    <li>
                        <a className='current' href={this.fitbitPath}>
                            Fitbit
                        </a>
                        <ul></ul>
                    </li>
                    <li>
                        <a className='current' href={this.pedometerPath}>
                            Pedometer
                        </a>
                        <ul></ul>
                    </li>
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        default_arrays: state.default_arrays,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getDefaultData: () => {
            dispatch(accounts.getDefaultArrays());
        },
        authLogout: () => {
            dispatch(logout());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

// export default Menu;
