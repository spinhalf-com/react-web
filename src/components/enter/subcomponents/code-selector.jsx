import React, { Component } from 'react';
import {connect} from "react-redux";
import {default_data} from "../../../store/actions/default";

class CodeSelector extends Component {
    // constructor(props) {
    //     super(props);
    // }

        createCodesArray = () => {
                let rows = [];
                console.log(this.props)
                this.props.default_data.map(item => {
                        rows.push(<option key={item[0]} value={item[0]}>
                                {item[2]}
                        </option>);
                        return null;
                });
                return rows;
        };

    render() {
        return (
            <select id="code" name="code">
                <option value=""> - - - - - -</option>
                    {/*{this.createCodesArray()}*/}
                {/*<option value="CD">Charitable Donations</option>*/}
                {/*<option value="CP">Petrol</option>*/}
                {/*<option value="CT">Council Tax</option>*/}
                {/*<option value="DO">Dining out</option>*/}
                {/*<option value="EL">Electricity / Gas / Water</option>*/}
                {/*<option value="F">Food / Household</option>*/}
                {/*<option value="GC">Cash</option>*/}
                {/*<option value="GYM">Gym</option>*/}
                {/*<option value="IN">Insurance</option>*/}
                {/*<option value="INT">Interest</option>*/}
                {/*<option value="IS">Salary Income</option>*/}
                {/*<option value="IX">Non Salary Income</option>*/}
                {/*<option value="ME">Musical / Hifi</option>*/}
                {/*<option value="OB">Opening Balance / Adjustment</option>*/}
                {/*<option value="RFO">General Expense Account</option>*/}
                {/*<option value="SB">Books</option>*/}
                {/*<option value="SC">Clothes</option>*/}
                {/*<option value="SG">Gifts</option>*/}
                {/*<option value="SH">Health</option>*/}
                {/*<option value="SKY">Sky</option>*/}
                {/*<option value="SO">General Expenses</option>*/}
                {/*<option value="SR">Music</option>*/}
                {/*<option value="TP">Telephone</option>*/}
                {/*<option value="TR">Transfer</option>*/}
                {/*<option value="R1">Yamaha YZF-R1</option>*/}
                {/*<option value="65B">65 Bulstrode Court</option>*/}
                {/*<option value="HO">Holidays</option>*/}
                {/*<option value="DI">Dividend Income</option>*/}
                {/*<option value="INV">Investment</option>*/}
                {/*<option value="D3">Alpina D3</option>*/}
                {/*<option value="HMRC">Tax Payments and credits</option>*/}
                {/*<option value="LA">Legal / Accounting Fees</option>*/}
                {/*<option value="P">Pension</option>*/}
                {/*<option value="TS">Travel / Subsistence</option>*/}
                {/*<option value="PF">Professional / Freelancer Fees</option>*/}
                {/*<option value="S">Sales</option>*/}
                {/*<option value="PI">Pension Growth</option>*/}
                {/*<option value="INV">Investment</option>*/}
                {/*<option value="NOT">3rd party expense</option>*/}
                {/*<option value="640">BMW Gran Coupe</option>*/}
                {/*<option value="DE">Digital Entertainment</option>*/}
            </select>
        )
    }
}

function mapStateToProps(state) {
        return {
                default_data: state.default_data
        };
}

function mapDispatchToProps(dispatch) {
        return {
                getDefaultArrays: () => {
                        dispatch(default_data.getDefaultArrays());
                }
        };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CodeSelector);