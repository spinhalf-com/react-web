import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Functions from './../../functions/functions';

// import config from '../config/config';
// import axios from 'axios';
import AccountSelector from "./subcomponents/account-selector";
import CodeSelector from "./subcomponents/code-selector";
import TableHead from "./subcomponents/table-head";
import EnterTableFoot from "./subcomponents/enter-table-foot";
import AmountInput from './subcomponents/amount-input';
import {
    transactionsData,
    getDescriptionOptions,
    clearDescriptionOptions,
    saveTransactionItem,
    transactionsDataSaveError
} from "../../store/actions/transactions";
import './../../css/transactions.css';

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
                description: '',
                taccount: ''
            },
            description: '',
            showTransferAccount: false,
            errors: false
        };
        this.accountSetter = this.accountSetter.bind(this)
        this.codeSetter = this.codeSetter.bind(this)
        this.amountSetter = this.amountSetter.bind(this)
    }

    componentDidMount() {
        this.autoDate();
        this.props.transactionsDataSaveError(false);
    }

    setPostState(key, value) {
        let postData = this.state.postData;
        postData[key] = value;
        this.setState({postData: postData});
        //console.log(this.state);
    }

    accountSetter(e) {
        // console.log(e.target)
        this.setPostState(e.target.name, e.target.value);
    }

    codeSetter(e) {
        this.setPostState(e.target.name, e.target.value);
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

    autoDate(event = null) {
        let date = null;
        if(!event || event.target.value === '') {
            date = Functions.formatDate(new Date());
        } else {
            date = Functions.formatDate(event.target.value);
        }
        this.setPostState('date', date);
    }

    amountSetter(event) {
        console.log('parent', event.target.value)
        this.setPostState('amount', event.target.value);
        console.log(this.state.postData);
    }
    
    descriptionSearch(event) {
        let text = event.target.value;
        let code = this.state.postData.code;
        if(code.length > 1 && text.length > 1) {
            this.props.getDescriptionOptions(text, code);
        }
    }

    renderDescList() {
        if(!_.isEmpty(this.props.matching_description_data)) {
            return (<ul style={{listStyle:"none",paddingLeft:"0"}}>
                {this.props.matching_description_data.map((item, key) =>
                    <li key={key} className="injump" onClick={() => this.chooseDescription(item)}>{item}</li>
                )}</ul>);
        }
        return null;
    }

    chooseDescription(item) {
        console.log(item);
        this.setPostState('description', item);
        document.getElementById('description').value = item;
        this.props.clearDescriptionOptions();
    }

    saveTransaction() {
        let postData = this.state.postData;

        if(postData.taccount === null || postData.taccount === '') {
            delete(postData.taccount)
        }
        this.props.saveTransactionItem(postData);
    }

    descSet() {

    }

    logger(event) {
        // this.props.transactionsDataSaveError(!this.props.saveErrors);
        console.log(this.state.postData);
    }

    render() {
        return (
            <div id="left-m" className={"left-m"}>
                <form id="trans" method="post" action="#">
                    <table id="rounded-corner" summary="">
                        <thead  onMouseOver={() => this.logger()} >
                            <TableHead headertext={"Enter Transactions"}/>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="alt">
                                Account
                            </td>
                            <td className="alt">
                                <AccountSelector
                                    name={'account'}
                                    parentAction={(e) => this.accountSetter(e)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td className="alt disableDate">
                                Date
                            </td>
                            <td className="alt" id="dc">
                                <input
                                    type="text"
                                    value={this.state.postData.date}
                                    onFocus={(event) => this.autoDate(event)}
                                    onChange={(event) => this.autoDate(event)}
                                    name="date"
                                    className={"inputCell"}
                                />

                            </td>
                        </tr>

                        <tr>
                            <td className="alt">
                                Amount
                            </td>
                            <td className="alt">
                               <AmountInput
                                   parentAction={(e) =>  this.amountSetter(e)}
                               />
                            </td>
                        </tr>

                        <tr>
                            <td className="alt">
                                Code
                                <input
                                    type="checkbox"
                                    name="transfer"
                                    ref="is_transfer"
                                    id="transfer"
                                    onChange={event => this.checkStatus(event)}
                                />
                            </td>
                            <td className="alt">
                               <CodeSelector
                                   name="code"
                                   parentAction={(e) => this.codeSetter(e)}
                               />
                                <div id="instr">
                                    { this.state.showTransferAccount ? <AccountSelector
                                                                        parentAction={(e) => this.accountSetter(e)}
                                                                        name={'taccount'}
                                                                    />
                                    : null }
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="alt">
                                Description
                            </td>
                            <td className="alt">
                                <textarea
                                    id="description"
                                    name="description"
                                    cols="20"
                                    rows="3"
                                    onKeyUp={(event) => this.descriptionSearch(event)}
                                    className="prompt inputCell"
                                    ref={(textarea) => { this.descriptionArea = textarea; }}
                                    onBlur={(e) => this.setPostState('description', e.target.value)}
                                ></textarea>
                                <div id="hiddenList" className="hiddenList" style={{display:"block"}}>
                                    {this.renderDescList()}
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                <table style={{width:"250px"}} id="rounded-corner">
                    <tbody>
                        <tr>
                            <td className="alt">
                                <button value="Cancel" id="cancel" style={{width:"117px"}} onClick={() => this.cancel()}>Cancel</button>
                            </td>
                            <td className="alt">
                                <button value="Save" id="save" style={{width:"120px"}} onClick={() => this.saveTransaction()}>Save</button>
                            </td>
                        </tr>
                        { this.props.saveErrors ?
                            <tr>
                                <td className="errors" style={{backgroundColor: "#FF7D82", textAlign: "center"}} colSpan='2'>
                                    There are errors in the save data
                                </td>
                            </tr>
                        : null }
                        <EnterTableFoot/>
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        matching_description_data: state.transactions.matching_description_data,
        saveErrors: state.transactions.saveErrors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTransactionsData: (account) => {
            dispatch(transactionsData.getTransactionsData(account));
        },
        getDescriptionOptions: (text, code) => {
            dispatch(getDescriptionOptions(text, code));
        },
        clearDescriptionOptions: () => {
            dispatch(clearDescriptionOptions());
        },
        saveTransactionItem: (data) => {
            dispatch(saveTransactionItem(data));
        },
        transactionsDataSaveError: (data) => {
            dispatch(transactionsDataSaveError(data))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterTransaction);
