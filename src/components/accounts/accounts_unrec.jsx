import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config/config';

class AccountsUnrec extends Component {
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
        this.fetchData();
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    fetchData() {
        axios.get(this.state.balances_list, this.authObj)
            .then(response => {

                this.setState({
                    accountBalances: response.data.cryptos_balances,
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

    createAccountsList = () => {
        let rows = [];

        this.state.accountBalances.map((array) => (
            rows.push(<tr key={array[0]}>
                <td id={`n`+array[0]} className={'crypto_item_desc'}>{array[2]}</td>
                <td id={`v`+array[0]} className={'crypto_item'}>{array[1]}</td>
            </tr>)
        ));
        return rows;
    };

    render() {
        return (
            <div className='submenu'>
                <ul className={'crypto'}><li>
                    <table key={`ct`} className={'table'}>
                        <tbody key={`cb`}>
                        {this.createAccountsList()}
                        </tbody>
                    </table>
                </li></ul>
            </div>
        )
    }
}
export default AccountsUnrec;
