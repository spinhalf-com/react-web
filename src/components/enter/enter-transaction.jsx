import React, { Component } from 'react';
import { connect } from 'react-redux';
import Functions from './../../functions/functions';

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
    clearTransactionItems,
    getDescriptionOptions
} from "../../store/actions/transactions";

class EnterTransaction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            postData: {
                account: '',
                date: '',
                amount: '',
                code: '',
                description: ''
            },
            showTransferAccount: false
        };

        this.accountSetter = this.accountSetter.bind(this)
    }

    setPostState(key, value) {
        let postData = this.state.postData;
        postData[key] = value;
        this.setState({postData: postData});
    }

    accountSetter(target, value) {
        this.setPostState(target, value);
    }

    checkStatus() {
        this.setState({
            showTransferAccount: this.refs.is_transfer.checked
        });
        // console.log(this.refs.is_transfer.checked);
    }

    clearForm() {

    }

    save() {
        console.log(this.state.postData)
    }

    autoDate(event) {
        let date = null;
        if(event.target.value === '') {
            date = Functions.formatDate(new Date());
        } else {
            date = Functions.formatDate(event.target.value);
        }
        this.setPostState('date', date);
        console.log(Functions.formatDate(event.target.value))
    }

    checkAmount(amount) {
        if(amount > 0) {
            if(window.confirm("Is this a credit amount?")) {
                this.setPostState('amount', amount);
            } else {
                this.setPostState('amount', -amount);
            }
        }
    }
    
    descriptionSearch(event) {
        let text = event.target.value;
        let code = this.state.postData.code;
        
        if(text.length > 1) {
            this.props.getDescriptionOptions(text, code);
        }
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
                                <AccountSelector  name={'account'} parentAction={this.accountSetter}/>
                            </td>
                        </tr>

                        <tr>
                            <td className="alt disableDate">
                                Date
                            </td>
                            <td className="alt" id="dc">
                                <input type="text" value={this.state.postData.date} onFocus={(event) => this.autoDate(event)} onChange={(event) => this.autoDate(event)} name="date"  className={"inputCell"}/>

                            </td>
                        </tr>

                        <tr>
                            <td className="alt">
                                Amount
                            </td>
                            <td className="alt">
                                <input type="text" value={this.state.postData.amount} onChange={(event) => this.checkAmount(event.target.value)} name="amount" className={"inputCell"}/>
                            </td>
                        </tr>

                        <tr>
                            <td className="alt">
                                Code
                                <input type="checkbox" name="transfer" ref="is_transfer" id="transfer" onChange={event => this.checkStatus(event)}/>
                            </td>
                            <td className="alt">
                               <CodeSelector name="code" onChange={(event) => this.accountSetter(event)}/>
                                <div id="instr">
                                    { this.state.showTransferAccount ? <AccountSelector parentAction={this.accountSetter} name={'taccount'}/> : null }
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="alt">
                                Description
                            </td>
                            <td className="alt">
                                <textarea id="description" name="description" cols="20" rows="3" onKeyUp={(event) => this.descriptionSearch(event)}
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
        transactions_array: state.transactions.transactions_array,
        matching_description_data: state.transactions.matching_description_data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTransactionsData: (account) => {
            dispatch(transactionsData.getTransactionsData(account));
        },
        getDescriptionOptions: (text, code) => {
            dispatch(getDescriptionOptions(text, code));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterTransaction);
