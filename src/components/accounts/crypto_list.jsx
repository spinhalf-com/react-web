import React, { Component } from 'react';
// import Functions from '../functions';
import axios from 'axios';

class CryptoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accountBalances: [],
            costBalances: [],
            error: null,
            crypto_price_url: 'https://min-api.cryptocompare.com/data/price?tsyms=GBP&fsym=',
            balances_list: 'https://jfr.zapple.co/balances_json',
            crypto_price_url2: 'https://cryptomate.co.uk/api/all/GBP'
        };
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
                this.parseResponse(JSON.parse(response))
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: err
                });
            });
    }

    parseResponse(response) {
        this.setState({
            accountBalances: response.data.accounts,
            costBalances: response.data.codes,
            loading: false,
            error: null
        });

        let rows = [];

        this.state.accountBalances.map((name, value) => (
            rows.push(<tr><td>{name}</td><td>{value}</td></tr>)
        ));

        console.log(rows);
    }

    createCryptoList = () => {
        let table = [];

        for (let i = 0; i < this.state.accountBalances.length; i++) {
            let row = [];
            row.push(
                <td key={`a`+i}>2
                    {this.state.accountBalances[i][0]}
                </td>,
                <td key={`b`+i}>
                    {this.state.accountBalances[i][1]}
                </td>,
            );
            console.log('row',row);
            table.push(<tr key={i} id={this.state.accountBalances[i]+`id`}>{row}</tr>)
        }
        return table;
    };

    render() {
        return (
            <div className='submenu'>
                <ul style={{background:'#E6EAE9'}}>
                    <table style={{width:'100%',padding:'5px'}}>
                        <tbody>


                        {/*{this.createCryptoList()}*/}
                        <tr>
                            <td style={{textAlign:'left',color:'darkslategrey'}}>Bitcoin</td>
                            <td style={{textAlign:'right',color:'darkslategrey'}}>&pound;4,743.07</td>
                        </tr>

                        <tr>
                            <th style={{textAlign:'left',color:'darkslategrey'}}>TOTAL</th>
                            <th style={{textAlign:'right',color:'darkslategrey'}}>&pound;5,681.08</th>
                        </tr>
                        </tbody>
                    </table>
                </ul>
            </div>
        )
    }
}

export default CryptoList;