import React, { Component } from 'react';
import axios from 'axios';
import CryptoValue from './crypto_value';

class CryptoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accountBalances: [],
            error: null,
            totalBalance: 0,
            balances_list: 'https://jfr.zapple.co/balances_json'
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

    runningTotal(total){
        console.log(total);
        // let newTotal = parseFloat(total) +  parseFloat(this.state.totalBalance);
        // this.setState({
        //     totalBalance: newTotal
        // });
    };


    createCryptoList = () => {
        let rows = [];

        this.state.accountBalances.map((array) => (
            rows.push(<tr key={array[0]}>
                <td id={`n`+array[0]} style={{textAlign:'left',color:'darkslategrey'}}>{array[2]}</td>
                <td id={`v`+array[0]} style={{textAlign:'right',color:'darkslategrey'}}>
                    <CryptoValue
                        ticker={array[0]}
                        balance={array[1]}
                        getChildValue={(value) => this.runningTotal}
                    />
                </td>
            </tr>)
        ));
        rows.push(
            <tr key='total'>
                <td style={{textAlign:'left',color:'darkslategrey',fontSize:"1em"}}>Total</td>
                <td style={{textAlign:'right',color:'darkslategrey',fontSize:"1em"}}>£{this.state.totalBalance}</td>
            </tr>
        )
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