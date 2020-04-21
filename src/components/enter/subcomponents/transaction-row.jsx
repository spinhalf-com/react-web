import React, { Component } from 'react';
import EditInput from "./edit-cell";
import DeleteButtons from "./deletion-buttons";

class TransactionRow extends Component {
    constructor(props) {
        super(props);

        this.editable = !props.reconciled;

        this.state = {
            rowKey: "row"+this.props.id,
            accountKey: "account"+this.props.id,
            dateKey: "date"+this.props.id,
            amountKey: "amount"+this.props.id,
            codeKey: "code"+this.props.id,
            descriptionKey: "description"+this.props.id,
            accountEdit: false,
            dateEdit: false,
            amountEdit: false,
            codeEdit: false,
            descriptionEdit: false,

            updatedState: {
                id: this.props.id
            },
            deleteOptionsVisible: false
        };
        this.concealButtons = this.concealButtons.bind(this);
        this.revealButtons = this.revealButtons.bind(this);
        this.saveEdits = this.saveEdits.bind(this);
    }

    formatDate(dateString) {
        let dateObj = new Date(dateString);
        return dateObj.getUTCFullYear() + "-" + dateObj.getUTCMonth()+1 + "-" + dateObj.getUTCDate();
    }

    makeCaps(string) {
        return string.toUpperCase();
    }

    async openEditableCell(event, field) {
        let target = field+"Edit";
        let obj = {};
        obj[target] = true;
        await this.setState(obj);
    }

    saveEdits(event) {
        console.log(event)
    }

    revealButtons(event) {
        this.setState({deleteOptionsVisible: true});
    }

    concealButtons(event) {
        this.setState({deleteOptionsVisible: false});
    }

    render() {
        return (
            <tr className={"datarow"} style={{fontSize:"1.0em"}} key={this.state.rowKey}>
                <td id={this.state.accountKey} className={"alt"} field="account" onDoubleClick={event => this.openEditableCell(event, "account")}>
                    {this.state.accountEdit && this.editable ? <EditInput name="account" id={this.props.id} onChange={() => this.props.editedCell} width={'30px'} value={this.props.account}/> : this.props.account}
                </td>
                <td id={this.state.dateKey} className={"alt date"} field="date" onDoubleClick={event => this.openEditableCell(event, "date")}>
                    {this.state.dateEdit && this.editable ? <EditInput name="date" id={this.props.id} onChange={() => this.props.editedCell} width={'150px'} value={this.props.date}/> : this.props.date}
                </td>
                <td className={"alt"} field="amount" style={{textAlign:"right"}}  id={this.state.amountKey} onDoubleClick={event => this.openEditableCell(event, "amount")}>
                    {this.state.amountEdit && this.editable ? <EditInput name="amount" id={this.props.id} onChange={() => this.props.editedCell} width={'130px'} value={this.props.amount}/> : this.props.amount}
                </td>
                <td id={this.state.codeKey} className={"alt"} field="code" onDoubleClick={event => this.openEditableCell(event, "code")}>
                    {this.state.codeEdit && this.editable ? <EditInput name="code" id={this.props.id} onChange={() => this.props.editedCell} width={'30px'} value={this.props.code}/> : this.props.code}
                </td>
                <td
                    className={"alt deltrans"}
                    field="description"
                    onMouseOver={() => this.revealButtons()}
                    onMouseOut={() => setTimeout(() => this.concealButtons(), 3000)}
                    onDoubleClick={event => this.openEditableCell(event, "description")}
                >
                    <div
                        id={this.state.descriptionKey}
                        className={"editable"}
                        field="description"
                    >
                        {this.state.descriptionEdit && this.editable ? <EditInput name="description" id={this.props.id} saveEdits={() => this.editedCell} width={'330px'} value={this.props.description}/> : this.props.description}
                    </div>
                    {this.editable && this.state.deleteOptionsVisible ? <DeleteButtons
                                mouseOut={e => this.concealButtons(e)}
                                mouseIn={e => this.revealButtons(e)}
                                id={this.props.id}
                            />
                        : null
                    }
                </td>
            </tr>
        )
    }
}
export default TransactionRow;
