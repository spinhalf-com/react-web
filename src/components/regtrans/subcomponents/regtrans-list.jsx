import React, { Component } from 'react';
import config from './../../../config/config';
import '../../../css/regtrans.css';

class RegtransList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            year: "",
            month: ""
        };
        this.setDateInfo();
    }

    setDateInfo() {
        let date = new Date();
        // console.log(date)
        this.year = date.getFullYear();
        let month = parseInt(date.getMonth()) + 1;
        if(month.toString().length == 1) {
            this.month = "0" + month.toString();
        } else {
            this.month = month.toString();
        }
    }

    buildMonthSelector() {
        let rows = [];
        rows.push(<option key='' value=''> - select - </option>)

        config.MONTHSLIST.map(item => {
            rows.push(<option key={item.number} value={item.number} >
                {item.name}
            </option>);
            return null;
        });
        return rows;
    }

    buildYearSelector() {
        let rows = [];
        rows.push(<option key='' value=''> - select - </option>)

        for(var i = -1; i < 3; i++) {
            let yearValue = parseInt(this.year) + i;
            rows.push(<option key={yearValue} value={yearValue}>{yearValue}</option>);
        }
        return rows;
    }

    chooseMonth(event) {
        this.month = event.target.value;
        console.log(this.month);
    }

    chooseYear(event) {
        this.year = event.target.value;
        console.log(this.year);
    }

    render() {
        return (
            <div id="recdiv"  className={"regtrans_list"} style={{width:"850px"}}>
                <form id="transtype" action="https://jfr.zapple.co/regtrans" method="post">
                    <table id="rounded-corner" className="regtrans-table">
                        <tbody>
                        <tr>
                            <th colSpan="3">
                                Regular Transactions
                            </th>
                        </tr>
                        <tr>
                            <td className="alt">
                                Month / Year
                            </td>
                            <td className="alt">
                                <select className="selects" name="month" defaultValue={this.month} onChange={(e) => this.chooseMonth(e)}>
                                    {this.buildMonthSelector()}
                                </select>
                            </td>
                            <td className="alt">
                                <select className="selects" name="year" defaultValue={this.year} onChange={(e) => this.chooseYear(e)}>
                                    {this.buildYearSelector()}
                                </select>
                                <span style={{cursor:"pointer"}}>
                                    <input type="submit" value="Confirm" id="confirm"/>
                                </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                <div id="recdiv">
                </div>
            </div>
        )
    }
}
export default RegtransList;