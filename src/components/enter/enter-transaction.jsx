import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import AccountSelector from "./subcomponents/account-selector";
import CodeSelector from "./subcomponents/code-selector";
import TableHead from "./subcomponents/table-head";
import EnterTableFoot from "./subcomponents/enter-table-foot";
import AmountInput from './subcomponents/amount-input';
import DateInput from './subcomponents/date-input';
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
                date: new Date(),
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
        this.dateSetter = this.dateSetter.bind(this)
    }

    componentDidMount() {
        this.props.transactionsDataSaveError(false);
    }

    async setPostState(key, value) {
        let postData = this.state.postData;
        postData[key] = value;
        await this.setState({postData: postData});
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
    }


    save() {
        console.log(this.state.postData)
    }

    dateSetter(date) {
        this.setPostState('date', date);
    }

    amountSetter(amount) {
        this.setPostState('amount', amount);
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
        this.setPostState('description', item);
        document.getElementById('description').value = item;
        this.props.clearDescriptionOptions();
    }

    prepareSaveTransaction() {
        let postData = this.state.postData;

        postData.transfer = true;

        if(postData.taccount === null || postData.taccount === '') {
            delete(postData.taccount);
            postData.transfer = false;
        }

        if(!this.state.showTransferAccount) {
            delete(postData.taccount);
            postData.transfer = false;
        }

        let errString = '';
        for (const [key, value] of Object.entries(postData)) {
            if(typeof key !== 'string') {
                delete postData[key]
            }
            if(!value) {
                if(key !== 'transfer' && key !== '[object Object]') {
                    errString += key + " is missing! \n";
                    console.log(postData)
                }
            }
        }

        if(errString.length) {
            alert(errString);
        } else {
            this.executeSave(postData);
            this.clearForm();
        }
    }

    clearForm() {
        let postData = {
            account: '',
            date: new Date(),
            amount: '',
            code: '',
            description: '',
            taccount: ''
        };
        this.setPostState(postData);
        this.refs.is_transfer.checked = false;
        this.setState({showTransferAccount: false})
        document.getElementById('account').value = '';
        // document.getElementById('taccount').value = '';
        document.getElementById('date-input').value = '';
        document.getElementById('amount-input').value = '';
        document.getElementById('code').value = '';
        document.getElementById('description').value = '';
        document.getElementById('transfer').value = false;
    }

    async executeSave(postData) {
        await this.props.saveTransactionItem(postData);
    }

    logger(event) {
        // this.props.transactionsDataSaveError(!this.props.saveErrors);
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
                                    id="account"
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
                                <DateInput
                                    parentAction={(date) =>  this.dateSetter(date)}
                                />

                            </td>
                        </tr>

                        <tr>
                            <td className="alt">
                                Amount
                            </td>
                            <td className="alt">
                               <AmountInput
                                   parentAction={(amount) =>  this.amountSetter(amount)}
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
                                   id="code"
                                   parentAction={(e) => this.codeSetter(e)}
                               />
                                <div id="instr">
                                    { this.state.showTransferAccount ? <AccountSelector
                                                                        parentAction={(e) => this.accountSetter(e)}
                                                                        name={'taccount'}
                                                                        id="taccount"
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
                                <button value="Save" id="save" style={{width:"120px"}} onClick={() => this.prepareSaveTransaction()}>Save</button>
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
