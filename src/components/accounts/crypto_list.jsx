import React, { Component } from 'react';
import { connect } from "react-redux";
import { cryptos } from "../../store/actions/cryptos";
import config from '../../config/config';

class CryptoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accountBalances: [],
            error: null,
            totalBalance: 0,
            balances_list: config.API_URL + config.API_PREFIX +  'balances_json',
            data: [],
            calcArray: {}
        };
        this.childHandler = this.childHandler.bind(this);
        this.authObj = {
            headers: { Authorization: "Bearer " + localStorage.getItem('oauthToken') }
        }
    }

    componentDidMount() {
        this.props.getCryptos();
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    createCryptoList = () => {
        let rows = [];
        let sum = 0.0;
        this.props.cryptos_data.map(item => {
            let price = parseFloat(item[1]) * parseFloat(item[3])
            sum += price
            
            rows.push(<tr key={item[0]}>
                <td id={`n`+item[0]} style={{textAlign:'left',color:'darkslategrey'}}>{item[2]}</td>
                <td id={`v`+item[0]} style={{textAlign:'right',color:'darkslategrey'}}>
                    £{price.toFixed(2)}
                </td>
            </tr>);
            return null;
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
        cryptos_data: state.cryptos
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