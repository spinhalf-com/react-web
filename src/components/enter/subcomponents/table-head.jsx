import React, { Component } from 'react';
//import ReactRedux from "react-redux";

class TableHead extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <tr>
                <th colSpan="2" className="rounded-both" scope="col">
                    {this.props.headertext}
                </th>
            </tr>
        )
    }
}
export default TableHead;