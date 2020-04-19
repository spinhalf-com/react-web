import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    transactionsQueryData
} from './../../../store/actions/transactions';


class FilterDiv extends Component {

    builder(event) {
        if(this.props.filterDisplay) {
            let name = event.target.name;
            let value = event.target.value;

            console.log(name, value)

            if(value === null || value === undefined || value === "") {
                this.setState({[name]: undefined});
            } else {
                this.setState({[name]: value});
            }
        } else {
            this.clearState();
        }
        console.log(this.state);
        this.props.transactionsQueryData(this.state);
    }

    clearState() {
        this.setState({"acsel": null});
        this.setState({"d1sel": null});
        this.setState({"d2sel": null});
        this.setState({"amsel": null});
        this.setState({"cdsel": null});
        this.setState({"desel": null});
        this.props.transactionsQueryData(null);
    }

    render() {
        return (
            <div id="filterdiv" style={{display:"block"}}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <div className={"searchBar"} style={{display:this.props.filterDisplay}}>
                                <input style={{width:"50px"}} onChange={(event) => this.builder(event)} type="text" name="acsel" className={"_chg"} placeholder="account"/>
                                <input style={{width:"80px"}} onChange={(event) => this.builder(event)} type="text" name="d1sel" className={"_chg"} placeholder="date from"/>
                                <input style={{width:"80px"}} onChange={(event) => this.builder(event)} type="text" name="d2sel" className={"_chg"} placeholder="date to"/>
                                <input style={{width:"80px"}} onChange={(event) => this.builder(event)} type="text" name="amsel" className={"_chg"} placeholder="amount"/>
                                <input style={{width:"50px"}} onChange={(event) => this.builder(event)} type="text" name="cdsel" className={"_chg"} placeholder="code"/>
                                <input style={{width:"200px"}} onChange={(event) => this.builder(event)} type="text" name="desel" className={"_chg"} placeholder="description"/>
                                <button onClick={(e) => this.builder(e)} >Go</button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        transactions_array: state.transactions.transactions_array
    };
}

function mapDispatchToProps(dispatch) {
    return {
        transactionsQueryData: (filterData) => {
            dispatch(transactionsQueryData(filterData));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterDiv);