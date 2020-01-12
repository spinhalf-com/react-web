import React, { Component } from 'react';
import axios from 'axios';
import CryptoValue from "../accounts/crypto_list";

// Our Parent Class
class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            accountBalances: [],
            error: null,
            totalBalance: 0,
            balances_list: 'https://jfr.zapple.co/balances_json',
            data: []
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
                <td id={`n`+array[0]} style={{textAlign:'left',color:'darkslategrey'}}>{array[2]}</td>
                <td id={`v`+array[0]} style={{textAlign:'right',color:'darkslategrey'}}>
                    <Child
                        ticker={array[0]}
                        balance={array[1]}
                        parentAction={this.childHandler}
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


    /*
     Function that gets called when
     we bubble up our `return` from Child
    */
    childHandler(dataFromChild) {
        console.log('df:',dataFromChild)

        // let dataArray = this.state.data;
        // dataArray.push({
        //     ticker: dataFromChild.ticker,
        //     value: dataFromChild.calculatedValue
        // });
        //
        // console.log(dataArray);
        //
        let totalBalance = parseFloat(this.state.totalBalance);
        //
        totalBalance += parseFloat(dataFromChild.calculatedValue);
        //
        this.setState({totalBalance: totalBalance});
        //
        // this.setState({
        //     data: dataFromChild
        // });
        //
        let bal = 0;
        this.state.data.map((obj) => (
            // console.log(obj.value)
            bal += parseFloat(obj.value)
        ));

        // this.setState({totalBalance: bal});
    }

    render() {
        return (
            <div className='submenu'>
                Crypto List
                <ul style={{background:'#E6EAE9'}}><li>
                    <table key={`ct`} style={{width:'100%',padding:'5px'}}>
                        <tbody key={`cb`}>
                            {this.createCryptoList()}
                        </tbody>
                    </table>
                </li></ul>
            </div>
        )
    }
}

export default Parent;

// Child Class
class Child extends Component {

    constructor(props) {
        super(props);

        this.handleCallToParent = this.handleCallToParent.bind(this);

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
            <div className='balance_value' onMouseOver={this.handleCallToParent}>
                {this.parseToCurrency()}
            </div>
        )
        //return <a onClick={() => this.props.parentAction('Set Parent state set from child: ' + Math.floor(Math.random() * 999))}>Update Parent</a>;
    }
}

