import React, { Component } from 'react';
import { connect } from 'react-redux';
import { regtransData, addRegtransItem } from "../../../store/actions/regtrans";
import AccountSelector from "../../enter/subcomponents/account-selector";
import CodeSelector from "../../enter/subcomponents/code-selector";

class EnterNew extends Component {
    constructor(props) {
        super(props);

        //console.log(props);

        this.state = {
            account: "",
            day: "",
            amount: "",
            code: "",
            description: ""
        };
        this.stateSetter = this.stateSetter.bind(this)
    }

    saveRecord() {
        this.setState( { editing: false });
        let postData = {
            id: this.state.id,
            account: this.state.account,
            day: this.state.day,
            amount: this.state.amount,
            code: this.state.code,
            description: this.state.description,
            active: true
        };
        this.props.addRegtransItem(postData);
        this.clearState();
    }

    clearState() {
        this.setState({
            account: "",
            day: "",
            amount: "",
            code: "",
            description: ""
        });
    }

    // changeVars(event) {
    //     this.setState({ [event.target.name]: event.target.value });
    // }

    // logger(event) {
    //     this.setState({ [event.target.name]: event.target.value });
    // }

    stateSetter(event) {
        this.setState({[event.target.name]: event.target.value} );
    }

    render() {
        return (
            <tfoot>
                <tr>
                    <td>
                        {/*<input id="account" type="text" value={this.state.account} onKeyUp={(event) => this.changeVars(event)} onChange={(event) => this.logger(event)}/>*/}
                        <AccountSelector name='account' value={this.state.account} parentAction={(event) => this.stateSetter(event)}/>
                    </td>
                    <td>
                        <input name="day" value={this.state.day} onChange={(event) => this.stateSetter(event)} />
                    </td>
                    <td>
                        <input name="amount" value={this.state.amount} onChange={(event) => this.stateSetter(event)} />
                    </td>
                    <td>
                        <CodeSelector name='code' value={this.state.code} parentAction={(event) => this.stateSetter(event)}/>
                        {/*<input id="code" type="text" value={this.state.code} onKeyUp={(event) => this.changeVars(event)} onChange={(event) => this.logger(event)}/>*/}
                    </td>
                    <td>
                        <input name="description" value={this.state.description} onChange={(event) => this.stateSetter(event)} />
                    </td>
                    <td>
                        <button onClick={() => this.saveRecord()}>Save</button>
                    </td>
                </tr>
            </tfoot>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getRegtransData: () => {
            dispatch(regtransData.getRegtransData());
        },
        addRegtransItem: (data) => {
            dispatch(addRegtransItem(data));
        },
    };
}

export default connect(null, mapDispatchToProps)(EnterNew);
