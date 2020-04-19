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
        if(amount > 0) {
            if(!window.confirm("Is this a credit amount?")) {
                this.amountInput.focus();
            }
        }
    }

    render() {
        return (
            <input
                type="text"
                onBlur={(event) => this.parseAmount(event)}
                onChange={e => this.props.parentAction(e)}
                name="amount"
                className={"inputCell"}
                ref={(input) => { this.amountInput = input; }}
            />
        )
    }
}

export default AmountInput;