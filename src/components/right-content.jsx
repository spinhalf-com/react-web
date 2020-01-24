import React, { Component } from 'react';
import EnterTransaction from "./enter/enter-transaction";
import TableFoot from "./enter/subcomponents/table-foot";

import './../css/main.css';


class RightContent extends Component {

    render() {
        return (
            <div className={"right_content"} id='right_content'>

                <EnterTransaction/>

                <div id="statbar">
                    <div id="inst">
                        <div id="filterdiv">
                            <table>
                                <tbody>
                                <tr>
                                    <td>
                                        <div className={"searchBar"}>
                                            <input type="text" id="acsel" className={"_chg"} placeholder="account"/>
                                            <input type="text" id="d1sel" className={"_chg"} placeholder="date from"/>
                                            <input type="text" id="d2sel" className={"_chg"} placeholder="date to"/>
                                            <input type="text" id="amsel" className={"_chg"} placeholder="amount"/>
                                            <input type="text" id="cdsel" className={"_chg"} placeholder="code"/>
                                            <input type="text" id="desel" className={"_chg"} placeholder="description"/>
                                            <button id="searchall">Go</button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={"swap"} id="listrecords">
                    </div>
                    <table id="rounded-corner" className={"table-right rounded-corner-right"}>
                        <thead>
                        <tr>
                            <th className={"rounded"} colSpan="4" scope="col">
                                Recent Transactions <button className={"filter"} style={{float:"right"}}>Filter</button>
                            </th>
                            <th className={"rounded-q4"} scope="col">
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <b>Account</b>
                            </td>
                            <td width="80px">
                                <b>Date</b>
                            </td>
                            <td>
                                <b>Amount</b>
                            </td>
                            <td>
                                <b>Code</b>
                            </td>
                            <td width="350px">
                                <b>Description</b>
                            </td>
                        </tr>
                        <tr>
                            <th><a id="backButton" className={"page pageprev"} href="#">Back</a></th>
                            <th colSpan="3">
                            </th>
                            <th><a id="nextButton" className={"page pagenext"} href="search?page=2">Next</a></th>
                        </tr>
                        <tr className={"datarow"} style={{fontSize:"1.0em"}} id="row39749">
                            <td id="account39749" className={"alt editable"} field="account" did="39749">
                                MZ
                            </td>
                            <td id="date39749" className={"alt editable date"} field="date" did="39749">
                                2020-01-23
                            </td>
                            <td className={"alt editable"} field="amount" style={{textAlign:"right"}} did="39749"
                                id="amount39749">
                                -2.00
                            </td>
                            <td id="code39749" className={"alt editable"} did="39749" field="code">
                                TS
                            </td>
                            <td className={"alt deltrans"} did="39749" field="description">
                                <div id="description39749" did="39749" className={"editable"} field="description">WAITROSE
                                    AYLESBURY GBR
                                </div>
                                <div id="d39749" style={{display: "none"}}>

                                    <button type="button" id="confirmDel39749" delid="39749"
                                            className={"btn btn-default confirmDel"}>Delete
                                    </button>
                                </div>
                                <div id="dconf39749" style={{display:"none"}}>
                                    <button type="button" id="canceldelrow39749" delid="39749"
                                            className={"btn btn-warning cancelDel"}>Cancel Delete
                                    </button>
                                    <button type="button" id="confirmdelrow39749" delid="39749"
                                            className={"btn btn-danger deleteRow"}>Confirm Delete
                                    </button>

                                </div>
                            </td>
                        </tr>

                        <tr className={"datarow"} style={{fontSize:"1.0em"}} id="row39747">
                            <td id="account39747" className={"alt editable"} field="account" did="39747">
                                MZ
                            </td>
                            <td id="date39747" className={"alt editable date"} field="date" did="39747">
                                2020-01-22
                            </td>
                            <td className={"alt editable"} field="amount" style={{textAlign:"right"}} did="39747"
                                id="amount39747">
                                -5.49
                            </td>
                            <td id="code39747" className={"alt editable"} did="39747" field="code">
                                640
                            </td>
                            <td className={"alt deltrans"} did="39747" field="description">
                                <div id="description39747" did="39747" className={"editable"} field="description">BP
                                    GERRARDS CROSS CONN GERRARDS CROS GBR
                                </div>
                                <div id="d39747" style={{display: "none"}}>

                                    <button type="button" id="confirmDel39747" delid="39747"
                                            className={"btn btn-default confirmDel"}>Delete
                                    </button>
                                </div>
                                <div id="dconf39747" style={{display:"none"}}>
                                    <button type="button" id="canceldelrow39747" delid="39747"
                                            className={"btn btn-warning cancelDel"}>Cancel Delete
                                    </button>
                                    <button type="button" id="confirmdelrow39747" delid="39747"
                                            className={"btn btn-danger deleteRow"}>Confirm Delete
                                    </button>

                                </div>
                            </td>
                        </tr>

                        <TableFoot/>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default RightContent;
