import React, { Component } from 'react';
import axios from 'axios';
import CryptoValue from './crypto_value';
import { connect } from "react-redux";
import { cryptos } from "../../actions/cryptos";

class CryptoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accountBalances: [],
            error: null,
            totalBalance: 0,
            balances_list: 'https://jfr.zapple.co/bals'
        };
        this.runningTotal = this.runningTotal.bind(this);
    }

    componentDidMount() {
        //this.fetchData();
        this.props.getCryptos();
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    fetchData() {
        axios.get(this.state.balances_list)
            .then(response => {
                this.setState({
                    accountBalances: response.data.cryptos,
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
        let newTotal = parseFloat(total) +  parseFloat(this.state.totalBalance);
        this.setState({totalBalance: newTotal});
    };

    createCryptoList = () => {
        let rows = [];
        let sum = 0.0;
        this.props.data.map(item => {
            let price = parseFloat(item[1]) * parseFloat(item[3])
            sum += price
            
            rows.push(<tr key={item[0]}>
                <td id={`n`+item[0]} style={{textAlign:'left',color:'darkslategrey'}}>{item[2]}</td>
                <td id={`v`+item[0]} style={{textAlign:'right',color:'darkslategrey'}}>
                    {/* <CryptoValue
                        ticker={item[0]}
                        balance={item[1]}
                        getChildValue={(value) => this.runningTotal}
                    /> */}
                    £{price.toFixed(2)}
                </td>
            </tr>)
        });
        sum = sum.toFixed(2)
        rows.push(
            <tr key='total'>
                <td style={{textAlign:'left',color:'darkslategrey',fontSize:"1.2em", fontWeight:"bold"}}>Total</td>
                <td style={{textAlign:'right',color:'darkslategrey',fontSize:"1.2em", fontWeight:"bold"}}>£{sum}</td>
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
function mapStateToProps(state) {
    return {
        data: state.cryptos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCryptos: () => {
            dispatch(cryptos.getCryptos());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CryptoList);