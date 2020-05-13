import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterDiv from './filter-div';
import { transactionsQueryData, transactionsData } from "../../../store/actions/transactions";


class TableHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showFilter: false
        };
    }

    setFilterState() {
        this.setState({
            showFilter: this.state.showFilter ? false: true
        });

        //move this logic to redux store - this component is now a grandchild of the target
    }

    clearFilterState() {
        this.props.transactionsQueryData({});
    }

    refresh() {
        this.props.transactionsRefresh();
    }

    render() {
        return (
            <thead>
            {
                this.state.showFilter ?
                <tr>
                    <td colSpan="5">
                        <FilterDiv filterDisplay={this.state.showFilter}/>
                    </td>
                </tr>
                :null
            }
            <tr>
                <th className={"rounded  top-blue"} colSpan="4" scope="col">
                    Recent Transactions <button onClick={() => this.setFilterState()} className={"filter"} style={{float:"right"}}>Filter</button>
                </th>
                <th className={"rounded-q4  top-blue"} scope="col">
                    <button onClick={() => this.clearFilterState()} className={"filter"} style={{float:"left"}}>Clear Filters</button>
                    <button onClick={() => this.refresh()} className={"filter"} style={{float:"left"}}>Refresh</button>
                </th>
            </tr>
            </thead>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        transactionsQueryData: (queryData = null) => {
            dispatch(transactionsQueryData(queryData));
        },
        transactionsRefresh: () => {
            dispatch(transactionsData.getTransactionsData())
        }

    };
}
export default connect(null, mapDispatchToProps)(TableHeader);