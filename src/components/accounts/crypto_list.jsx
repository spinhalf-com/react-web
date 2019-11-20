import React, { Component } from 'react';
// import Functions from '../functions';
import axios from 'axios';
import CryptoValue from './crypto_value';

class CryptoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accountBalances: [],
            costBalances: [],
            error: null,
            short_crypto_codes: [],
            totalBalance: 0,

            // balances_list: 'https://jfr.zapple.co/balances_json',
            balances_list: 'http://jrcash.loc/balances_json',
            coin_market_cap_key: 'b31f4a71-013e-4957-80ce-88826f2ea7a6',
            coin_market_cap_header: 'X-CMC_PRO_API_KEY',
            coin_market_cap_url:'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
        };

        this.runningTotal = this.runningTotal.bind(this);
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

    getCryptoPrice(symbol) {

        let url = this.state.crypto_price_url + symbol;

        axios.get(url)
            .then(response => {

                this.setState({
                    accountBalances: response.data.cryptos_balances,
                    price_loading: false,
                    error: null
                });
            })
            .catch(err => {
                this.setState({
                    price_loading: false,
                    error: err
                });
            });
    }

    runningTotal = (total) => {
        console.log(total);
        let newTotal = total +  this.state.totalBalance;
        this.setState({totalBalance: newTotal});
    };

    createCryptoList = () => {
        let rows = [];

        this.state.accountBalances.map((array) => (
            rows.push(<tr key={array[0]}>
                <td id={`n`+array[0]} style={{textAlign:'left',color:'darkslategrey',fontSize:"0.8em"}}>{array[2]}</td>
                <td id={`v`+array[0]} style={{textAlign:'right',color:'darkslategrey',fontSize:"0.8em"}}>
                    <CryptoValue
                        ticker={array[0]}
                        balance={array[1]}
                        getChildValue={() => this.runningTotal}
                    />
                </td>
            </tr>)
        ));
        console.log(this.state.totalBalance);
        return rows;
    };

    render() {
        return (
            <div className='submenu'>
                <ul style={{background:'#E6EAE9'}}>
                    <table key={`ct`} style={{width:'100%',padding:'5px'}}>
                        <tbody key={`cb`}>
                            {this.createCryptoList()}
                        </tbody>
                    </table>
                </ul>
            </div>
        )
    }
}

export default CryptoList;