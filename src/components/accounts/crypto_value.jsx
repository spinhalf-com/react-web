import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import store from '../../store/index';

class CryptoValue extends Component {
    constructor(props) {
        super(props);

        this.calculateValue = this.calculateValue.bind(this);

        this.state = {
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

    // componentDidUpdate() {
    //     console.log(this.state.calculatedValue);
    //     // let ret = () => {
    //         //this.props.getChildValue(this.state.calculatedValue)
    //     // }
    // }

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

    calculateValue(price) {
        let value = 0;
        value = parseFloat(this.props.balance) * parseFloat(price);
        let decVal = value.toFixed(2);
        this.setState({
            cryptoValue: price,
            calculatedValue: decVal
        });
        this.props.getChildValue(this.state.calculatedValue);

    }

    parseToCurrency() {
        return `£` + this.state.calculatedValue;
    }

    render() {

        let state = this.state;

        return (
            <div className='balance_value' onMouseOver={this.calculateValue}>
                {this.parseToCurrency()}
            </div>
        )
    }
}
export default CryptoValue;