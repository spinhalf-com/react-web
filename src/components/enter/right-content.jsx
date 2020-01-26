import React, { Component } from 'react';
import EnterTransaction from "../enter/enter-transaction";
import TransactionList from './transaction-list';

class RightContent extends Component {

    render() {
        return (
            <div className={"right_content"} id='right_content'>
                <EnterTransaction/>
                <TransactionList/>
            </div>
        )
    }
}
export default RightContent;
