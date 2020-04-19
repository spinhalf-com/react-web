import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import ListTableFoot from "../enter/subcomponents/list-table-foot";
import FilterDiv from './subcomponents/filter-div';
import ListHeader from "./subcomponents/list-header";
import PaginationRow from "./subcomponents/pagination-row";
import TransactionRow from "./subcomponents/transaction-row";
// import TableHead from "./subcomponents/table-head";
import TableHeader from "./subcomponents/table-header";
import { transactionsData } from "../../store/actions/transactions";
import Functions from './../../functions/functions';

class TransactionList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterShow : 'none'
        }
    }

    componentDidMount() {
        this.props.getTransactionsData();
    }

    reveal() {
        // console.log(this.props.transactions_array);
    }

    loadTransactions() {
        if(!_.isEmpty(this.props.transactions_array)) {

            return this.props.transactions_array.map((item) =>
                <TransactionRow key={item.id}
                                id={item.id}
                                account={item.Transtype}
                                date={Functions.formatDate(item.Date)}
                                amount={item.Amount}
                                code={item.Code}
                                description={item.Description}
                                reconciled={item.Reconciled}
                />
            )}
        return null;
    }

    render() {
        return (
            <div className={"right-list-enclosure"}>
                <div style={{display:this.state.filterShow}}>
                    <FilterDiv/>
                </div>
                <div className={"swap"} id="listrecords">
                </div>
                <table id="rounded-corner" className={"table-right rounded-corner-right"} onMouseOver={this.reveal()}>
                    <TableHeader/>
                    <tbody>
                    <ListHeader/>
                    <PaginationRow/>
                    {
                        this.loadTransactions()
                    }
                    <ListTableFoot/>
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
        getTransactionsData: (queryString = null) => {
            dispatch(transactionsData.getTransactionsData(queryString));
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
