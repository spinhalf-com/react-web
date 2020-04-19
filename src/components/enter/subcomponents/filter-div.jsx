import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    transactionsData,
    transactionsQueryData
} from './../../../store/actions/transactions';

class FilterDiv extends Component {

    builder(event) {
        if(this.props.filterDisplay) {
            let name = event.target.name;
            let value = event.target.value;

            if(value === null || value === undefined || value === "") {
                this.setState({[name]: undefined});
            } else {
                this.setState({[name]: value});
            }
        } else {
            this.clearState();
        }
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

    mergeQueryObjects(obj) {
        let queryObject = this.props.query_object;
        let merged =  {...obj, ...queryObject };
        return this.props.updateQueryObjectState(merged);
    }

    async run() {
        await this.props.updateQueryObjectState(this.state);
        this.props.transactionsList(this.props.queryString);
    }

    logger() {

    }

    render() {
        return (
            <div id="filterdiv" style={{display:"block"}} onMouseOver={() => this.logger()}>
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
                                <button onClick={() => this.run()} >Go</button>
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
        queryString: state.transactions.queryString,
        query_object: state.transactions.queryObject
    };
}

function mapDispatchToProps(dispatch) {
    return {
        transactionsQueryData: (filterData) => {
            dispatch(transactionsQueryData(filterData));
        },
        transactionsList: (queryString) => {
            dispatch(transactionsData.getTransactionsData(queryString));
        },
        updateQueryObjectState(obj) {
            dispatch(transactionsQueryData(obj))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterDiv);