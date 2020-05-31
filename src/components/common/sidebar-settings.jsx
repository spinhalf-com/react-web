import React, { Component } from 'react';
import axios from 'axios';
import config from "../../config/config";
import headers from "../../config/headers";
import '../../css/sidebar.css';
import '../../css/jfrzapple.css';

class SidebarSettings extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            month_up: "",
            year_up: ""
        }
    }

    componentDidMount() {
        // this.setDateInfo();
        this.getSetting('month_up');
        this.getSetting('year_up');
        this.buildMonthSelector();
        this.buildYearSelector();
    }

    getSetting(name) {
        let getUrl = config.API_URL + config.API_PREFIX + 'settings/' + name + '/name';

        axios({
            method: 'GET',
            url: getUrl,
            headers: headers
        }).then(
            result => {
               this.setState({[name]: result.data.data.appValue})
            },
            error => {
                console.log(error);
            }
        );
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
        let year = new Date().getFullYear()
        let rows = [];
        rows.push(
            <option key='' value=''>
                {' '}
                - select -{' '}
            </option>
        );
        for (var i = -1; i < 3; i++) {
            let yearValue = parseInt(year) + i;
            rows.push(
                <option key={String(yearValue)} value={String(yearValue)}>
                    {yearValue}
                </option>
            );
        }
        return rows;
    }

    chooseMonth(event) {
        // console.log(event.target.value)
        this.putSetting('month_up', event.target.value)
    }

    chooseYear(event) {
        this.putSetting('year_up', event.target.value)
    }

    putSetting(name, value) {
        let putUrl = config.API_URL + config.API_PREFIX + 'settings/' + name + '/name';
        let putData = {
            'appValue': value
        }
        axios({
            method: 'PUT',
            url: putUrl,
            headers: headers,
            data: putData
        }).then(
            result => {
                this.getSetting(name);
            },
            error => {
                console.log(error);
            }
        );
    }

    render() {
        return (
            <div className="sidebar_search menuitem">
                {/*<div className="defaults-label">Date Defaults</div>*/}
                {/*<a className='defaults-label menuitem' href="/#">Date Defaults</a>*/}
                <select
                    className='selects mselect'
                    name='month'
                    value={this.state.month_up}
                    onChange={(e) => this.chooseMonth(e)}
                >
                    { this.buildMonthSelector() }
                </select>
                <select
                    className='selects yselect'
                    name='year'
                    value={this.state.year_up}
                    onChange={(e) => this.chooseYear(e)}
                >
                    { this.buildYearSelector() }
                </select>
            </div>
        )
    }
}
export default SidebarSettings;