import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTransactionItem } from './../../../store/actions/transactions';

class EditCell extends Component {
    constructor(props) {
        super(props);

        //console.log(props);

        this.state = {
            editing: false,
            value: props.value,
            id: props.did,
            type: props.type
        }
    }

    makeEditable() {
        this.setState( {editing: true});
        //console.log(this.state)
    }

    async editedCell(e) {
        await this.setState({ value: e.target.value });
        //console.log(this.state)
    }

    updateRecord(event) {
        this.setState( {editing: false});
        let putData = {
            id: this.props.id,
        };
        let name = this.props.name;
        let value = event.target.value;
        putData[name] = value;
        console.log(putData);

        this.props.editTransactionItem(this.props.id, putData);
    }


    render() {
        return (
            <div onDoubleClick={() => this.makeEditable()}>
                {this.state.editing ? <input onBlur={(e) => this.updateRecord(e)} onChange={(e) => this.editedCell(e)} value={this.state.value}/> : this.props.value}
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        editTransactionItem: (id, data) => {
            dispatch(editTransactionItem(id, data));
        },
    };
}

export default connect(null, mapDispatchToProps)(EditCell);
