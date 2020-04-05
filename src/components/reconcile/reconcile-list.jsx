import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    reconcileData,
    setTickList
} from '../../store/actions/reconcile';
import '../../css/regtrans.css';
import ConfirmButton from './confirm-button';
import EditCell from './edit-cell';
import AccountSelector from './../enter/subcomponents/account-selector';


class ReconcileList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            year: '',
            month: '',
            selectedIds: [],
            allIds: []
        };
        this.accountSetter = this.accountSetter.bind(this)
    }

    componentDidMount() {
        // this.props.getRegtransData();
        this._isMounted = true;
    }

    accountSetter(event) {

    }

    setDateInfo() {
        let date = new Date();
        // console.log(date)
        this.year = date.getFullYear();
        let month = parseInt(date.getMonth()) + 1;
        if (month.toString().length === 1) {
            this.month = '0' + month.toString();
        } else {
            this.month = month.toString();
        }
    }


    flip(event) {
        let allIds = [];
        this.props.regtrans_data.map((item) => {
            allIds.push(item.id);
            return null;
        });
        if (event.target.checked) {
            this.setState({ selectedIds: allIds });
            this.props.setCheckboxList(allIds);
        } else {
            this.setState({ selectedIds: [] });
            this.props.setCheckboxList([]);
        }
    }

    flipBox(id) {
        let checkedEntries = [...this.state.selectedIds];

        // If the ID is in the array, remove it - else push it.
        const isInArray = checkedEntries.indexOf(id);
        if (isInArray !== -1) {
            checkedEntries.splice(isInArray, 1);
        } else {
            checkedEntries.push(id);
        }
        // Set the local component state
        this.setState({ selectedIds: checkedEntries });
        // Set the Redux state
        this.props.setCheckboxList(checkedEntries);
    }

    inclusive(id) {
        if (this.state.selectedIds.length === 0) {
            return false;
        }
        return this.state.selectedIds.includes(id);
    }

    createRegtransList = () => {
        let rows = [];
        let allIds = [];
        rows.push(
            <tr key='0'>
                <th>Account</th>
                <th>Day</th>
                <th>Amount</th>
                <th>Code</th>
                <th>Description</th>
                <th>
                    <input
                        type='checkbox'
                        onClick={(e) => this.flip(e)}
                    ></input>
                </th>
            </tr>
        );

        //console.log(this.props.regtrans_data);

        if(this.props.regtrans_data.length) {
            this.props.regtrans_data.map((item) => {
                allIds.push(item.id);
                rows.push(
                    <tr key={item.id}>
                        <td>
                            <EditCell value={item.account} type='account' did={item.id}/>
                        </td>
                        <td>
                            <EditCell value={item.day} type='day' did={item.id}/>
                        </td>
                        <td>
                            <EditCell value={item.amount} type='amount' did={item.id}/>
                        </td>
                        <td>
                            <EditCell value={item.code} type='code' did={item.id}/>
                        </td>
                        <td>
                            <EditCell value={item.description} type='description' did={item.id}/>
                        </td>
                        <td>
                            <input
                                type='checkbox'
                                checked={this.inclusive(item.id)}
                                onChange={(e) => this.flipBox(item.id)}
                            />
                        </td>
                    </tr>
                );
                return null;
            });
        }
        // this.setState({'allIds': allIds});
        return rows;
    };

    render() {
        return (
            <div
                id='recdiv'
                className={'regtrans_list'}
                style={{ width: '850px' }}
            >
                <table id='rounded-corner' className='regtrans-table'>
                    <tbody>
                        <tr>
                            <th colSpan='6'>Reconcile Transactions</th>
                        </tr>
                        <tr>
                            <td className='alt'>Account</td>
                            <td className='alt'>
                                <AccountSelector parentAction={(event) => this.accountSetter(event)}/>
                            </td>
                            <td className='alt'>
                                <input/>
                            </td>
                            <td className='alt'>
                                <input/>
                            </td>
                            <td className='alt'>
                                <input/>
                            </td>
                            <td className='alt'>
                                <ConfirmButton/>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div id='recdiv'>
                    <table id='rounded-corner' className='regtrans-table'>
                        <thead>
                            <tr>
                                <th colSpan='6'>
                                    Select Transactions For Entry
                                </th>
                            </tr>
                        </thead>
                        <tbody>{/**this.createRegtransList()**/}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReconcileList);
