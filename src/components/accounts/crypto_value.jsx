import React, { Component } from 'react';
// import Functions from '../functions';
import axios from 'axios';

class CryptoValue extends Component {
    constructor(props) {
        super(props);

        this.state = {

            crypto_price_url: 'https://min-api.cryptocompare.com/data/price?tsyms=GBP&fsym=',
            coin_market_cap_key: 'b31f4a71-013e-4957-80ce-88826f2ea7a6',
            coin_market_cap_header: 'X-CMC_PRO_API_KEY',
            coin_market_cap_url:'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {

        let url = this.state.crypto_price_url + this.props.ticker;

        axios.get(url)
            .then(response => {

                this.setState({
                    cryptoValue: response.data.GBP,
                    error: null
                });
            })
            .catch(err => {
                this.setState({
                    error: err
                });
            });
    }

    calculateValue = () => {

        let value = 0;

        value = parseFloat(this.props.balance) * parseFloat(this.state.cryptoValue);
        let decVal = value.toFixed(2);
        // this.props.returnCalculatedBalance(decVal);
        return this.parseToCurrency(decVal);
    };

    parseToCurrency(value) {
        return `£` + value;
    }

    render() {
        return (
            <div className='balance_value'>
                {this.calculateValue()}
            </div>
        )
    }
}

export default CryptoValue;