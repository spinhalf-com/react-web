import React, { Component } from 'react';
// import config from '../config/config';
// import axios from 'axios';
import AccountSelector from "./subcomponents/account-selector";
import CodeSelector from "./subcomponents/code-selector";
import TableHead from "./subcomponents/table-head";
import TableFoot from "./subcomponents/table-foot";

import '../../css/jfrzapple.css';
import '../../css/main.css';

class EnterTransaction extends Component {
    constructor() {
        super();

        this.state = {
            error: '',
            postData: []
        };
    }

    dismissError() {
        this.setState({ error: '' });
    }

    handleSubmit(evt) {
        evt.preventDefault();

        this.postData();
        return this.setState({ error: '' });
    }

    postData() {
        //let data = this.state.data;
    }

    handleSuccess(response) {
        this.setState({
            error: null,
        });
    }

    handleError(error) {
        this.setState({
            error: true,
            error_message: error,
        });
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
                                <AccountSelector/>
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
                                <input type="checkbox" name="transfer" id="transfer"/>
                            </td>
                            <td className="alt">
                               <CodeSelector/>
                                <div id="instr">
                                    <AccountSelector/>
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
                                <button value="Cancel" id="cancel" style={{width:"120px"}}>Cancel</button>
                            </td>
                            <td className="alt">
                                <button value="Save" id="save" style={{width:"120px"}}>Save</button>
                            </td>
                        </tr>
                        <TableFoot/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EnterTransaction;