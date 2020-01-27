import React, { Component } from 'react';

class ListHeader extends Component {
    render() {
        return (
            <tr>
                <td>
                    <b>Account</b>
                </td>
                <td width="80px">
                    <b>Date</b>
                </td>
                <td>
                    <b>Amount</b>
                </td>
                <td>
                    <b>Code</b>
                </td>
                <td width="350px">
                    <b>Description</b>
                </td>
            </tr>
        )
    }
}

export default ListHeader;