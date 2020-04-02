import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    regtransData,
    setTickList,
    setYear,
    setMonth
} from '../../../store/actions/regtrans';
import config from './../../../config/config';
import '../../../css/regtrans.css';
import ConfirmButton from './confirm-button';
import EditCell from './edit-cell';
import EnterNew from './enter-new';

class RegtransList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            year: '',
            month: '',
            selectedIds: [],
            allIds: []
        };
        this.setDateInfo();
    }

    componentDidMount() {
        this.props.getRegtransData();
        this._isMounted = true;
    }

    handleClick(event) {
        event.preventDefault();
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

    buildMonthSelector() {
        let rows = [];
        rows.push(
            <option key='' value=''>
                {' '}- select -{' '}
            </option>
        );

        config.MONTHSLIST.map((item) => {
            rows.push(
                <option key={item.number} value={item.number}>
                    {item.name}
                </option>
            );
            return null;
        });
        return rows;
    }

    buildYearSelector() {
        let rows = [];
        rows.push(
            <option key='' value=''>
                {' '}
                - select -{' '}
            </option>
        );

        for (var i = -1; i < 3; i++) {
            let yearValue = parseInt(this.year) + i;
            rows.push(
                <option key={yearValue} value={yearValue}>
                    {yearValue}
                </option>
            );
        }
        return rows;
    }

    chooseMonth(event) {
        this.month = event.target.value;
        //console.log(this.props.regtrans_data);
        this.props.setPostMonth(event.target.value);
    }

    chooseYear(event) {
        this.year = event.target.value;
        //console.log(this.year);
        this.props.setPostYear(event.target.value);
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
                            <th colSpan='3'>Regular Transactions</th>
                        </tr>
                        <tr>
                            <td className='alt'>Month / Year</td>
                            <td className='alt'>
                                <select
                                    className='selects'
                                    name='month'
                                    //defaultValue={this.month}
                                    onChange={(e) => this.chooseMonth(e)}
                                >
                                    {this.buildMonthSelector()}
                                </select>
                            </td>
                            <td className='alt'>
                                <select
                                    className='selects'
                                    name='year'
                                    //defaultValue={this.year}
                                    onChange={(e) => this.chooseYear(e)}
                                >
                                    {this.buildYearSelector()}
                                </select>
                                <span style={{ cursor: 'pointer' }}>
                                    <ConfirmButton />
                                </span>
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
                        <tbody>{this.createRegtransList()}</tbody>
                        <EnterNew/>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        regtrans_data: state.regtrans.entries
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getRegtransData: () => {
            dispatch(regtransData.getRegtransData());
        },
        buildTickList: () => {
            dispatch(regtransData.tickList());
        },
        setCheckboxList: (array) => {
            dispatch(setTickList(array));
        },
        setPostYear: (data) => {
            dispatch(setYear(data));
        },
        setPostMonth: (data) => {
            dispatch(setMonth(data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegtransList);
