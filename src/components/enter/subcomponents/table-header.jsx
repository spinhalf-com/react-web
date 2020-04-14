import React, { Component } from 'react';
import { connect } from 'react-redux';
import { transactionsData } from './../../../store/actions/transactions';

import FilterDiv from './filter-div';


class TableHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showFilter: false
        };
    }

    setFilterStatus() {
        this.setState({
            showFilter: this.state.showFilter ? false: true
        });

        //move this logic to redux store - this component is now a grandchild of the target
    }

    render() {
        return (
            <thead>
            {
                this.state.showFilter ?
                <tr>
                    <td colSpan="5">
                        <FilterDiv/>
                    </td>
                </tr>
                :null
            }
            <tr>
                <th className={"rounded  top-blue"} colSpan="4" scope="col">
                    Recent Transactions <button onClick={() => this.setFilterStatus()} className={"filter"} style={{float:"right"}}>Filter</button>
                </th>
                <th className={"rounded-q4  top-blue"} scope="col">
                </th>
            </tr>
            </thead>
        )
    }
}

export default TableHeader;