import React, { Component } from 'react';
import axios from "axios";

class CryptoValue extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ticker: props.ticker,
            calculatedValue: 0,
            crypto_price_url: 'https://min-api.cryptocompare.com/data/price?tsyms=GBP&fsym=',
            displayValue: "",
            balanceFromProps: this.props.balance,
            cryptoValue: null
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        let url = this.state.crypto_price_url + this.props.ticker;

        axios.get(url)
            .then(response => {
                let price = response.data.GBP;
                this.calculateValue(price);
            })
            .catch(err => {
                this.setState({
                    error: err
                });
            });
    }

    handleCallToParent() {
        this.props.parentAction();
    }

    calculateValue(price) {
        let value = 0;
        value = parseFloat(this.props.balance) * parseFloat(price);
        let decVal = value.toFixed(2);
        this.setState({
            cryptoValue: price,
            calculatedValue: decVal
        });
        this.props.parentAction({
            ticker: this.props.ticker,
            cryptoValue: price,
            calculatedValue: decVal
        });
    }

    parseToCurrency() {
        return `£` + this.state.calculatedValue;
    }

    render() {
        return (
            <div className='balance_value'>
                {this.parseToCurrency()}
            </div>
        )
    }
}
export default CryptoValue;
