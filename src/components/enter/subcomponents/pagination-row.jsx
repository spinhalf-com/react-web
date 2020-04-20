import React, { Component } from 'react';
import { connect } from "react-redux";
// import _ from 'lodash';

import { transactionsData, transactionsQueryData, getQueryString } from "../../../store/actions/transactions";

class PaginationRow extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     //add props for page values
    // }

    componentDidMount() {
        this.props.updateQueryObjectState({});
    }

    async mergeQueryObjects(obj) {
        let queryObject = this.props.query_object;
        let merged =  {...obj, ...queryObject };
        return await this.props.updateQueryObjectState(merged);
    }

    pageClick(direction) {

        if(direction === 'prev') {
            this.mergeQueryObjects({'page': this.props.pageData.prev_page})
        } else {
            this.mergeQueryObjects({'page': this.props.pageData.next_page})
        }
        console.log('vv',this.props.queryString)
        this.props.transactionsList(this.props.queryString);

    }

    render() {
        return (
            <tr>
                <th><span id="backButton" className={"page pageprev"} onClick={(e) => this.pageClick('prev')} >Back</span></th>
                <th colSpan="3">
                </th>
                <th><span id="nextButton" className={"page pagenext"} onClick={(e) => this.pageClick('next')} name={this.props.nextPage}>Next</span></th>
            </tr>
        )
    }
}

function mapStateToProps(state) {
    return {
        queryString: state.transactions.queryString,
        transactions_array: state.transactions.transactions_array,
        query_object: state.transactions.queryObject,
        pageData: state.transactions.pageData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        transactionsList: (queryString = null) => {
            dispatch(transactionsData.getTransactionsData(queryString));
        },
        updateQueryObjectState(obj) {
            dispatch(transactionsQueryData(obj))
        },
        getQueryString() {
            dispatch(getQueryString())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationRow);
