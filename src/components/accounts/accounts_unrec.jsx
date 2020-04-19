import React, { Component } from 'react';
import { connect } from "react-redux";
import { accounts } from '../../store/actions/accounts';
import config from '../../config/config';
import Functions from './../../functions/functions';

class AccountsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            accountBalances: [],
            displayIndex: "unrec_balances",
            error: null,
            balances_list: config.API_URL + config.API_PREFIX + 'balances_json',
            data: []
        };

        this.authObj = {
            headers: { Authorization: "Bearer " + localStorage.getItem('oauthToken') }
        }
    }

    componentDidMount() {
        this.props.getAccounts();
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    createAccountsList = () => {
        let rows = [];
        if(this.props.accounts_data.length) {
            this.props.accounts_data.map(item => {
                let colour = item[1] < 0 ? 'red' : 'darkslategrey';
                rows.push(<tr key={item[0]}>
                    <td id={`n` + item[0]} style={{textAlign: 'left', color: 'darkslategrey'}}>{item[2]}</td>
                    <td id={`v` + item[0]} style={{textAlign: 'right', color: colour}}>
                        {Functions.formatToCurrency(item[1])}
                    </td>
                </tr>);
                return null;
            });
        }
        return rows;
    };

    logger = () => {
        //console.log(this.props.cryptos_data);
    };

    render() {
        return (
            <div className='submenu'>
                <ul style={{background:'#E6EAE9'}}>
                    <table key={`ct`} style={{width:'100%',padding:'5px'}}>
                        <tbody key={`cb`}>
                        {this.createAccountsList()}
                        {this.logger()}
                        </tbody>
                    </table>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        accounts_data: state.accounts,
        cryptos_data: state.cryptos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAccounts: () => {
            dispatch(accounts.getAccounts());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountsList);