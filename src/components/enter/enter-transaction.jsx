import React, { Component } from 'react';
import { connect } from 'react-redux';


// import config from '../config/config';
// import axios from 'axios';
import AccountSelector from "./subcomponents/account-selector";
import CodeSelector from "./subcomponents/code-selector";
import TableHead from "./subcomponents/table-head";
import EnterTableFoot from "./subcomponents/enter-table-foot";
import EditCell from './subcomponents/edit-cell';
import {
    transactionsData,
    updateTransactionItem,
    confirmTransactionItems,
    clearTransactionItems
} from "../../store/actions/transactions";

class EnterTransaction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            postData: [],
            showTransferAccount: false
        };

        this.accountSetter = this.accountSetter.bind(this)
    }

    setPostState(key, value) {
        let postData = this.state.postData;
        postData[key] = value;
        this.setState({postData: postData});
    }

    // dismissError() {
    //     this.setState({ error: '' });
    // }
    //
    // handleSubmit(evt) {
    //     evt.preventDefault();
    //
    //     this.postData();
    //     return this.setState({ error: '' });
    // }
    //
    // postData() {
    //     //let data = this.state.data;
    // }
    //
    // handleSuccess(response) {
    //     this.setState({
    //         error: null,
    //     });
    // }
    //
    // handleError(error) {
    //     this.setState({
    //         error: true,
    //         error_message: error,
    //
    //     });
    // }

    accountSetter(target, value) {
        this.setPostState(target, value);
    }

    checkStatus() {
        this.setState({
            showTransferAccount: this.refs.is_transfer.checked
        });
        // console.log(this.refs.is_transfer.checked);
    }

    render() {
        return (
            <div id="left-m" className={"left-m"}>
                <form id="trans" method="post" action="#">
                    <table id="rounded-corner" summary="">
                        <thead>
                            <TableHead headertext={"Enter Transactions"}/>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="alt">
                                Account
                            </td>
                            <td className="alt">
                                <AccountSelector  id={'account'} parentAction={this.accountSetter}/>
                            </td>
                        </tr>

                        <tr>
                            <td className="alt disableDate">
                                Date
                            </td>
                            <td className="alt" id="dc">
                                <input type="text" id="date" name="date"  className={"inputCell"}/>
                                    <input type="hidden" id="datestate" value="3"/>
                            </td>
                        </tr>

                        <tr>
                            <td className="alt">
                                Amount
                            </td>
                            <td className="alt">
                                <input type="text" id="amount" name="amount" className={"inputCell"}/>
                            </td>
                        </tr>

                        <tr>
                            <td className="alt">
                                Code
                                <input type="checkbox" name="transfer" ref="is_transfer" id="transfer" onChange={event => this.checkStatus(event)}/>
                            </td>
                            <td className="alt">
                               <CodeSelector/>
                                <div id="instr">
                                    { this.state.showTransferAccount ? <AccountSelector id={'taccount'}/> : null }
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="alt">
                                Description
                            </td>
                            <td className="alt">
                                <textarea id="description" name="description" cols="20" rows="3"
                                          className="prompt inputCell"></textarea>
                                <div id="hiddenList" className="hiddenList" style={{display:"none"}}></div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                <table style={{width:"250px"}} id="rounded-corner">
                    <tbody>
                        <tr>
                            <td className="alt">
                                <button value="Cancel" id="cancel" style={{width:"117px"}}>Cancel</button>
                            </td>
                            <td className="alt">
                                <button value="Save" id="save" style={{width:"120px"}}>Save</button>
                            </td>
                        </tr>
                        <EnterTableFoot/>
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        transactions_array: state.reconcile.transactions_array
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTransactionsData: (account) => {
            dispatch(transactionsData.getTransactionsData(account));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterTransaction);
