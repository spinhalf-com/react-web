import React, { Component } from 'react';
import { connect } from "react-redux";
import { accounts } from '../../store/actions/accounts';

class AccountsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accountBalances: [],
            error: null
        };
    }

    componentDidMount() {
        this.props.getAccounts();
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    formatToCurrency(number) {
        let decPlaces = 2;
        let decSep = ".";
        let thouSep =",";
        var sign = number < 0 ? "-" : "";
        var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
        var j = (j = i.length) > 3 ? j % 3 : 0;

        return "£" + sign +
            (j ? i.substr(0, j) + thouSep : "") +
            i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
            (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
    }

    createAccountsList = () => {
        let rows = [];
        this.props.accounts_data.map(item => {
            let colour = item[1] < 0 ? 'red': 'darkslategrey';
            rows.push(<tr key={item[0]}>
                <td id={`n`+item[0]} style={{textAlign:'left',color:'darkslategrey'}}>{item[2]}</td>
                <td id={`v`+item[0]} style={{textAlign:'right',color:colour}}>
                    {this.formatToCurrency(item[1])}
                </td>
            </tr>);
            return null;
        });
        return rows;
    };

    render() {
        return (
            <div className='submenu'>
                <ul style={{background:'#E6EAE9'}}>
                    <table key={`ct`} style={{width:'100%',padding:'5px'}}>
                        <tbody key={`cb`}>
                        {this.createAccountsList()}
                        </tbody>
                    </table>
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        accounts_data: state.accounts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAccounts: () => {
            dispatch(accounts.getAccounts());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountsList);