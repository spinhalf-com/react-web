import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateReconcileItem } from './../../store/actions/reconcile';

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

    editedCell(e) {
        this.setState({ value: e.target.value });
        //console.log(this.state)
    }

    updateRecord() {
        this.setState( {editing: false});
        let putData = {
            id: this.state.id,
        };
        putData[this.state.type] = this.state.value;

        this.props.updateReconcileItem(putData, this.props.account);
    }


    render() {
        return (
            <div onDoubleClick={() => this.makeEditable()}>
                {this.state.editing ? <input onBlur={() => this.updateRecord()} onChange={(e) => this.editedCell(e)} value={this.state.value}/> : this.props.value}
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        updateReconcileItem: (data, account) => {
            dispatch(updateReconcileItem(data, account));
        },
    };
}

export default connect(null, mapDispatchToProps)(EditCell);
