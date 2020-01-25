import React, { Component } from 'react';
import axios from 'axios';
import CryptoValue from './crypto_value';
import config from '../../config/config';

class CryptoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accountBalances: [],
            error: null,
            totalBalance: 0,
            balances_list: config.API_URL + 'balances_json',
            data: [],
            calcArray: {}
        };
        this.childHandler = this.childHandler.bind(this)
    }

    componentDidMount() {
        this.fetchData();
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    fetchData() {
        axios.get(this.state.balances_list)
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

    createCryptoList = () => {
        let rows = [];

        this.state.accountBalances.map((array) => (
            rows.push(<tr key={array[0]}>
                <td id={`n`+array[0]} className={'account_item_desc'}>{array[2]}</td>
                <td id={`v`+array[0]} className={'account_item'}>
                    <CryptoValue
                        ticker={array[0]}
                        balance={array[1]}
                        parentAction={this.childHandler}
                    />
                </td>
            </tr>)
        ));
        rows.push(
            <tr key='total'>
                <td className={'account_total_desc'} >Total</td>
                <td className={'account_total'} >£{this.state.totalBalance}</td>
            </tr>
        )
        return rows;
    };

    childHandler(dataFromChild) {
        let calcArray = this.state.calcArray;
        calcArray[dataFromChild.ticker] = dataFromChild.calculatedValue;

        let totalBalance = 0;
        for (var i in this.state.calcArray) {                       //we build a unique-keyed object to prevent XHR duplication
            totalBalance += parseFloat(this.state.calcArray[i]);
        }
        this.setState({calcArray: calcArray});
        this.setState({totalBalance: totalBalance.toFixed(2)});
    }

    render() {
        return (
            <div className='submenu'>
                <ul className={'account'}><li>
                    <table key={`ct`} className={'table'}>
                        <tbody key={`cb`}>
                            {this.createCryptoList()}
                        </tbody>
                    </table>
                </li></ul>
            </div>
        )
    }
}
export default CryptoList;
