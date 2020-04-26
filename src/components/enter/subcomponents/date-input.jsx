import React, { Component } from 'react';
import Functions from './../../../functions/functions';

class DateInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: 0
        }
    }

    handleChange(event) {
        this.setState({date: event.target.value})
    }

    guessDate(e) {
        let today =  Functions.formatDate();
        document.getElementById('date-input').value = today;
    }

    parseDate(event) {
        let date = event.target.value;

        let splitDate = date.split('-');

        let newDate = date;
        if(splitDate.length === 2) {
            newDate = new Date().getFullYear() + "-" + splitDate[1] + "-" + splitDate[0];
        }
        document.getElementById('date-input').value = newDate;
        this.props.parentAction(newDate);
    }

    render() {
        return (
            <input
                type="text"
                onFocus={() => this.guessDate()}
                onBlur={(e) => this.parseDate(e)}
                name="date"
                id="date-input"
                className={"inputCell"}
                ref={(input) => { this.dateInput = input; }}
            />
        )
    }
}

export default DateInput;