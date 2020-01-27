import React, { Component } from 'react';
import ListTableFoot from "../enter/subcomponents/list-table-foot";
import FilterDiv from './subcomponents/filter-div';
import ListHeader from "./subcomponents/list-header";
import PaginationRow from "./subcomponents/pagination-row";
import TransactionRow from "./subcomponents/transaction-row";
import TableHead from "./subcomponents/table-head";
import TableHeader from "./subcomponents/table-header";

class TransactionList extends Component {
    constructor(props) {
        super(props);
        console.log(props)

        this.state = {
            filterShow : 'none'
        }
    }

    returnTransactions() {
        return [{
            id: 39747,
            account: 'MZ',
            date: '2020-01-22',
            amount: -5.97,
            code: 'F',
            description: 'GERRARDS CROSS CONN GERRARDS CROSS GBR',
            reconciled: 0
        },{
            id: 39748,
            account: 'AB',
            date: '2020-01-18',
            amount: -1200,
            code: '65B',
            description: 'Mortgage',
            reconciled: 1
        }];
    }

    render() {
        return (
            <div className={"right-list-enclosure"}>
                <div style={{display:this.state.filterShow}}>
                    <FilterDiv/>
                </div>
                <div className={"swap"} id="listrecords">
                </div>
                <table id="rounded-corner" className={"table-right rounded-corner-right"}>
                    <TableHeader/>
                    <tbody>
                    <ListHeader/>
                    <PaginationRow/>
                    {
                        this.returnTransactions().map((item) =>
                            <TransactionRow key={item.id}
                                id={item.id}
                                account={item.account}
                                date={item.date}
                                amount={item.amount}
                                code={item.code}
                                description={item.description}
                                reconciled={item.reconciled}
                            />
                        )
                    }
                    <ListTableFoot/>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TransactionList;
