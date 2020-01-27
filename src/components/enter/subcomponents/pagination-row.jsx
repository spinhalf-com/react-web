import React, { Component } from 'react';

class PaginationRow extends Component {
    constructor(props) {
        super(props);

        //add props for page values
    }

    render() {
        return (
            <tr>
                <th><a id="backButton" className={"page pageprev"} href="#">Back</a></th>
                <th colSpan="3">
                </th>
                <th><a id="nextButton" className={"page pagenext"} href="search?page=2">Next</a></th>
            </tr>
        )
    }
}
export default PaginationRow;