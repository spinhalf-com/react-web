import React, { Component } from 'react';

class TableHeader extends Component {

    setFilterStatus() {
        this.setState({
            filterShow: this.state.filterShow === 'block' ? 'none': 'block'
        });

        //move this logic to redux store - this component is now a grandchild of the target
    }

    render() {
        return (
            <thead>
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