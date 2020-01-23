import React, { Component } from 'react';
//import ReactRedux from "react-redux";

class AccountSelector extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <select id="account" name="account">
                <option value=""> - - - - - -</option>
                <option value="AB">Barclays Current</option>
                <option value="BC">Barclaycard</option>
                <option value="C">Cash</option>
                <option value="HX">Halifax</option>
                <option value="MB">MBNA Gold</option>
                <option value="MP">MBNA Platinum</option>
                <option value="SAB">Barclays Tracker</option>
                <option value="TE">Tesco Clubcard</option>
                <option value="BTC">Bitcoin</option>
                <option value="SB">Spinhalf Barclays</option>
                <option value="P">Pension</option>
                <option value="BIS">Barclays ISA</option>
                <option value="TES">Tesco Strawberry</option>
                <option value="DASH">Darkcoin</option>
                <option value="MZ">Monzo</option>
                <option value="ETH">Ethereum</option>
                <option value="XRP">Ripple</option>
                <option value="LTC">Litecoin</option>
                <option value="BCH">Bitcoin Cash</option>
                <option value="CVC">Civic Cash</option>
                <option value="NEO">Neo Coin</option>
                <option value="MIOTA">IOTA Coin</option>
                <option value="DATA">DATA Coin</option>
                <option value="KEY">SelfKey</option>
                <option value="XLM">Stellar Lumens</option>
            </select>
        )
    }
}

export default AccountSelector;
