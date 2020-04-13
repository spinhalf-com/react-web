import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    reconcileData,
    setTickList,
    updateReconcileItem,
    clearReconcileItems,
    confirmReconcileItems
} from '../../store/actions/reconcile';
import '../../css/regtrans.css';
import EditCell from './edit-cell';
import AccountSelector from './../enter/subcomponents/account-selector';


class ReconcileList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIds: [],
            allIds: []
        };
        this.accountSetter = this.accountSetter.bind(this)
    }

    componentDidMount() {
        this._isMounted = true;
        this.pathAccount();
    }

    pathAccount() {
        let pathStack = window.location.pathname.split('/');
        let account = pathStack[2] === undefined ? "": pathStack[2];
        this.setState({ account: account})
        if(pathStack[2] !== undefined) {
            this.props.getReconcileData(pathStack[2])
        }
    }

    accountSetter(event) {
        let pathStack = window.location.pathname.split('/');
        pathStack[2] = event.target.value;
        window.location.href = pathStack.join('/');
    }

    formatDate(date) {
        let dateObj = new Date(date);
        let year = dateObj.getFullYear();
        let month = parseInt(dateObj.getMonth()) + 1;
        let day = dateObj.getDate();

        if(String(month).length == 1) {
            month = "0" + String(month);
        }
        if(String(day).length == 1) {
            day = "0" + String(day);
        }
        return year + "-" + month + "-" + day;
    }

    clear() {
        this.props.clearReconcileItems(this.state.account)
    }

    confirm() {
        this.props.confirmReconcileItems(this.state.account)
    }
    
    flipState(id) {
        this.props.updateReconcileItem(id, this.state.account);
    }

    inclusive(id) {
        if (this.state.selectedIds.length === 0) {
            return false;
        }
        return this.state.selectedIds.includes(id);
    }

    createReconcileList = () => {
        let rows = [];
        let allIds = [];
        rows.push(
            <tr key='0'>
                <th>Account</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Code</th>
                <th>Description</th>
                <th>
                    <button
                        onClick={() => this.clear()}
                    >Clear</button>
                </th>
            </tr>
        );

        if(this.props.unreconciled_records) {
            this.props.unreconciled_records.map((item) => {
                allIds.push(item.id);
                let background = item.Reconciled === 2 ? "#CCFF99": "";
                let formattedDate = this.formatDate(item.Date);

                rows.push(
                    <tr key={item.id}>
                        <td style={{backgroundColor: background}}>
                            <EditCell value={item.Transtype} type='account' account={this.state.account} did={item.id}/>
                        </td>
                        <td style={{backgroundColor: background}}>
                            <EditCell value={formattedDate} type='date' account={this.state.account} did={item.id}/>
                        </td>
                        <td style={{backgroundColor: background}}>
                            <EditCell value={item.Amount} type='amount' account={this.state.account} did={item.id}/>
                        </td>
                        <td style={{backgroundColor: background}}>
                            <EditCell value={item.Code} type='code' account={this.state.account} did={item.id}/>
                        </td>
                        <td style={{backgroundColor: background}}>
                            <EditCell value={item.Description} type='description' account={this.state.account} did={item.id}/>
                        </td>
                        <td style={{backgroundColor: background}}>
                            <input
                                type='checkbox'
                                checked={item.Reconciled === 2}
                                onChange={(e) => this.flipState(item.id)}
                            />
                        </td>
                    </tr>
                );
                return null;
            });
        }
        return rows;
    };

    render() {
        return (
            <div
                id='recdiv'
                className={'regtrans_list'}
                style={{ width: '850px' }}
            >
                <table id='rounded-corner' className='reconcile-table'>
                    <tbody>
                        <tr>
                            <th colSpan='6'>Reconcile Transactions</th>
                        </tr>
                        <tr>
                            <td className='alt'>Account</td>
                            <td className='alt'>
                                <AccountSelector value={this.state.account} parentAction={(event) => this.accountSetter(event)}/>
                            </td>
                            <td className='alt'>
                                <input className="headerValues" readOnly value={this.props.reconciled_total || ""}/>
                            </td>
                            <td className='alt'>
                                <input className="headerValues" readOnly value={this.props.candidate_total || ""}/>
                            </td>
                            <td className='alt'>
                                <input className="headerValues" readOnly value={this.props.running_total || ""}/>
                            </td>
                            <td className='alt'>
                                <button className="confirm-button" onClick={() => this.confirm()}>Confirm</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div id='recdiv'>
                    <table id='rounded-corner' className='reconcile-table'>
                        <thead>
                            <tr>
                                <th colSpan='6'>
                                    Select Transactions For Reconciliation
                                </th>
                            </tr>
                        </thead>
                        <tbody>{ this.createReconcileList() }</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        unreconciled_records: state.reconcile.unreconciled_records,
        reconciled_total: state.reconcile.reconciled_total,
        candidate_total: state.reconcile.candidate_total,
        running_total: state.reconcile.running_total,
        unreconciled_total: state.reconcile.unreconciled_total
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getReconcileData: (account) => {
            dispatch(reconcileData.getReconcileData(account));
        },
        buildTickList: () => {
            dispatch(setTickList());
        },
        updateReconcileItem: (item, account) => {
            dispatch(updateReconcileItem(item, account));
        },
        clearReconcileItems: (account) => {
            dispatch(clearReconcileItems(account));
        },
        confirmReconcileItems: (account) => {
            dispatch(confirmReconcileItems(account));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReconcileList);
