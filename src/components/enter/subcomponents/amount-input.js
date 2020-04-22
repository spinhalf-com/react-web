import React, { Component } from 'react';


class AmountInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 0
        }
    }

    handleChange(event) {
        this.setState({amount: event.target.value})
    }

    parseAmount(event) {
        let amount = event.target.value;
        if(isNaN(amount)) {
            alert("Not a number!");
            this.amountInput.focus();
        }

        if(amount > 0) {
            if(!window.confirm("Is this a credit amount?")) {
                amount = -amount;
            }
        }
        document.getElementById('amount-input').value = amount;
        this.props.parentAction(amount);
    }

    render() {
        return (
            <input
                type="text"
                onBlur={(event) => this.parseAmount(event)}
                name="amount"
                id="amount-input"
                className={"inputCell"}
                ref={(input) => { this.amountInput = input; }}
            />
        )
    }
}

export default AmountInput;