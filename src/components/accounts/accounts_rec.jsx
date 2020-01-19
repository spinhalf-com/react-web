import React, { Component } from 'react';
import axios from 'axios';
import '../../css/sidebar.css';
import config from '../../config/config';
import {connect} from "react-redux";

class AccountsRec extends Component {
    constructor(props) {
        super(props)

        this.state = {
            accountBalances: [],
            displayIndex: "rec_balances",
            error: null,
            balances_list: config.API_URL + 'balances_json',
            data: []
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
                this.setState({
                    accountBalances: response.data,
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

    createAccountsList = () => {
        let rows = [];
        this.state.accountBalances.rec_balances.map((array) => (
            rows.push(<tr key={array[0]}>
                <td id={`n`+array[0]} className={'account_item_desc'}>{array[2]}</td>
                <td id={`v`+array[0]} className={'account_item'}>{array[1]}</td>
            </tr>)
        ));
        return rows;
    };

    render() {
        return (
            <div className='submenu'>
                <ul className={'crypto'}><li>
                    <table key={`ct`} className={'table'}>
                        <tbody key={`cb`}>
                        {this.createAccountsList()}
                        </tbody>
                    </table>
                </li></ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.balances
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getBalances: () => {
            dispatch(balan  23434ces.getBalances());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountsRec);


