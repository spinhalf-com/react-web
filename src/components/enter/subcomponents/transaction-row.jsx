import React, { Component } from 'react';
import EditInput from "./edit-input";
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
            updatedState: {
                id: this.props.id
            }
        }

    }

    formatDate(dateString) {
        let dateObj = new Date(dateString);
        return dateObj.getUTCFullYear() + "-" + dateObj.getUTCMonth()+1 + "-" + dateObj.getUTCDate();
    }

    makeCaps(string) {
        return string.toUpperCase();
    }

    openEditableCell(event) {
        if(!this.editable) {
            alert('This record cannot be edited. Sorry.');
            return;
        }
    }

    saveEditedRecord(key, value) {

    }

    render() {
        return (
            <tr className={"datarow"} style={{fontSize:"1.0em"}} key={this.state.rowKey}>
                <td id={this.state.accountKey} className={"alt"} field="account" did="39749" onDoubleClick={event => this.openEditableCell(event)}>
                    {this.props.account}
                </td>
                <td id={this.state.dateKey} className={"alt date"} field="date" did="39749">
                    {this.props.date}
                </td>
                <td className={"alt"} field="amount" style={{textAlign:"right"}} did="39749"  id={this.state.amountKey}>
                    {this.props.amount}
                </td>
                <td id={this.state.codeKey} className={"alt"} did="39749" field="code">
                    {this.props.code}
                </td>
                <td className={"alt deltrans"} did="39749" field="description">
                    <div id={this.state.descriptionKey} did="39749" className={"editable"} field="description">WAITROSE
                        {this.props.description}
                    </div>
                    {this.editable ? <DeleteButtons/> : null}
                </td>
            </tr>
        )
    }
}
export default TransactionRow;
