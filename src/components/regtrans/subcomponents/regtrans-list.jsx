import React, { Component } from 'react';
import { connect } from "react-redux";
import { regtransData } from '../../../store/actions/regtrans';
import config from './../../../config/config';
import '../../../css/regtrans.css';
import Checker from './checker.jsx';

class RegtransList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            year: "",
            month: "",
            selectedIds: [
                1,7,11
            ],
            allIds: [

            ]
        };
        this.setDateInfo();
    }

    componentDidMount() {
        this.props.getRegtransData();
        this._isMounted = true;
    }

    handleClick(event) {
        event.preventDefault();
    }

    setDateInfo() {
        let date = new Date();
        // console.log(date)
        this.year = date.getFullYear();
        let month = parseInt(date.getMonth()) + 1;
        if(month.toString().length === 1) {
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
        console.log(this.props.regtrans_data);
    }

    chooseYear(event) {
        this.year = event.target.value;
        console.log(this.year);
    }

    flip(event) {
        let allIds = [];
        this.props.regtrans_data.map(item => {
            allIds.push(item.id);
            return null;
        });
        if(event.target.checked) {
            this.setState({'selectedIds': allIds});
        } else {
            this.setState({'selectedIds': []});
        }
    }

    flipBox(event) {
        console.log(event.target.id);
        let allIds = this.state.selectedIds;
        if(allIds.includes(event.target.id)) {
            allIds.remove(event.target.id);
        } else {
            allIds.push(event.target.id);
        }
        this.setState({'selectedIds': allIds});
    }

    inclusive(id) {
        if(this.state.selectedIds.length === 0) {
            return false;
        }
        return this.state.selectedIds.includes(id);
    }

    createRegtransList = () => {
        let rows = [];
        let allIds = [];
        rows.push(<tr key='0'>
                <th>Account</th>
                <th>Day</th>
                <th>Amount</th>
                <th>Code</th>
                <th>Description</th>
                <th><input type='checkbox' onClick={(e) => this.flip(e)}></input></th>
            </tr>);

        this.props.regtrans_data.map(item => {
            allIds.push(item.id);
            rows.push(<tr key={item.id}>
                <td>{item.account}</td>
                <td>{item.day}</td>
                <td>{item.amount}</td>
                <td>{item.code}</td>
                <td>{item.description}</td>
                <td><Checker id={item.id} checked={this.inclusive(item.id)} onClick={(e) => this.flipBox(e)}/></td>
            </tr>);
            return null;
        });
        // this.setState({'allIds': allIds});
        return rows;
    };

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
                                    <input type="submit" value="Confirm" onClick={(e) => this.handleClick(e)} id="confirm"/>
                                </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                <div id="recdiv">
                    <table id="rounded-corner" className="regtrans-table">
                        <thead>
                            <tr>
                                <th colSpan="6">
                                    Select Transactions For Entry
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.createRegtransList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        regtrans_data: state.regtrans
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getRegtransData: () => {
            dispatch(regtransData.getRegtransData());
        },
        buildTickList: () => {
            dispatch(regtransData.tickList());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegtransList);

