import React, { Component } from 'react';
import { connect } from 'react-redux';
import Functions from './../../functions/functions';

// import config from '../config/config';
// import axios from 'axios';
import AccountSelector from "./subcomponents/account-selector";
import CodeSelector from "./subcomponents/code-selector";
import TableHead from "./subcomponents/table-head";
import EnterTableFoot from "./subcomponents/enter-table-foot";
import {
    transactionsData,
    getDescriptionOptions,
    clearDescriptionOptions
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
        this.codeSetter = this.codeSetter.bind(this)
    }

    setPostState(key, value) {
        let postData = this.state.postData;
        postData[key] = value;
        this.setState({postData: postData});
        //console.log(this.state);
    }

    accountSetter(e) {
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
        let logicalAmount = '';
        if(amount > 0) {
            if(window.confirm("Is this a credit amount?")) {
                logicalAmount = amount;
            } else {
                logicalAmount = -amount;
            }
            this.setPostState('amount', logicalAmount);
            return logicalAmount;
        }
    }
    
    descriptionSearch(event) {
        let text = event.target.value;
        let code = this.state.postData.code;
        // console.log(code);
        if(text.length > 1) {
            this.props.getDescriptionOptions(text, code);
        }
    }

    renderDescList() {
        if(this.props.matching_description_data !== null) {
            return (<ul style={{listStyle:"none",paddingLeft:"0"}}>
                {this.props.matching_description_data.map((item, key) =>
                    <li key={key} className="injump" onClick={() => this.chooseDescription(item)}>{item}</li>
                )
            };
            </ul>);
        }
        return null;

        //
        //
        // return (<ul style={{listStyle:"none",paddingLeft:"0"}}>
        //     <li className="injump">TESCO STORE 2668 HIGH WYCOMBE GBR</li>
        //     <li className="injump">TESCO STORES 2041 AYLESBURY 2 GBR</li>
        //     <li className="injump">TESCO STORES 2564 GERRARDS CROS GBR</li>
        // </ul>)
    }

    chooseDescription(item) {
        this.setPostState('description', item);
        this.props.clearDescriptionOptions();
    }

    saveTransaction() {
        let postData = this.state.postData;

        if(postData.taccount === null || postData.taccount === '') {
            delete(postData.taccount)
        }


    }

    logger() {
        console.log(this.props.matching_description_data);
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
                                <input
                                    type="text"
                                    value={this.state.postData.amount}
                                    // onBlur={(event) => this.checkAmount(event.target.value)}
                                    onChange={(event) => this.checkAmount(event.target.value)}
                                    name="amount"
                                    className={"inputCell"}
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
                                                                        parentAction={() => this.accountSetter()}
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
        },
        clearDescriptionOptions: () => {
            dispatch(clearDescriptionOptions());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterTransaction);
