import React, { Component } from 'react';
import config from './../../../config/config';

class RegtransList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            year: "",
            month: ""
        }
        this.setDateInfo();
    }

    componentDidMount() {

    }

    setDateInfo() {
        let date = new Date();
        console.log(date)
        this.year = date.getFullYear();
        this.month = parseInt(date.getMonth()) + 1;
    }

    buildMonthSelector() {
        let rows = [];
        config.MONTHSLIST.map(item => {
            rows.push(<option key={item.number} value={item.number}>
                {item.name}
            </option>);
            return null;
        });
        return rows;
    }

    buildYearSelector() {
        let rows = [];
        rows.push(<option key={parseInt(this.year)-1} value={parseInt(this.year)-1}>{parseInt(this.year)-1}</option>);
        rows.push(<option key={parseInt(this.year)} value={parseInt(this.year)}>{parseInt(this.year)}</option>);
        rows.push(<option key={parseInt(this.year)+1} value={parseInt(this.year)+1}>{parseInt(this.year)+1}</option>);
        rows.push(<option key={parseInt(this.year)+2} value={parseInt(this.year)+2}>{parseInt(this.year)+2}</option>);
        return rows;
    }

    render() {
        return (

            <div id="recdiv"  className={"regtrans_list"} style={{width:"850px"}}>
                <form id="transtype" action="https://jfr.zapple.co/regtrans" method="post">
                    <table id="rounded-corner" style={{width:"900px"}}>
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
                                <select name="month">
                                    {this.buildMonthSelector()}

                                    {/*<option value="01">January</option>*/}
                                    {/*<option value="02">February</option>*/}
                                    {/*<option value="03">March</option>*/}
                                    {/*<option value="04">April</option>*/}
                                    {/*<option value="05">May</option>*/}
                                    {/*<option value="06">June</option>*/}
                                    {/*<option value="07">July</option>*/}
                                    {/*<option value="08">August</option>*/}
                                    {/*<option value="09">September</option>*/}
                                    {/*<option value="10">October</option>*/}
                                    {/*<option value="11">November</option>*/}
                                    {/*<option value="12">December</option>*/}
                                </select>
                            </td>
                            <td className="alt">
                                <select name="year">
                                    {this.buildYearSelector()}
                                    {/*<option value="2019">2019</option>*/}
                                    {/*<option value="2020">2020</option>*/}
                                    {/*<option value="2021">2021</option>*/}
                                    {/*<option value="2022">2022</option>*/}
                                </select>
                                <span style={{cursor:"pointer"}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input
                                    type="submit" value="Confirm"/></span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                <div id="recdiv" style={{width:"850px"}}>
                </div>
            </div>
        )
    }
}
export default RegtransList;
