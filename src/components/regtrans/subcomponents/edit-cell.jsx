import React, { Component } from 'react';
import { connect } from 'react-redux';
import { regtransData, updateRegtransItem } from "../../../store/actions/regtrans";

class EditCell extends Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            editing: false,
            value: props.value,
            id: props.did,
            type: props.type
        }
    }

    makeEditable() {
        this.setState( {editing: true});
        console.log(this.state)
    }

    editedCell(e) {
        this.setState({ value: e.target.value });
        console.log(this.state)
    }

    updateRecord() {
        this.setState( {editing: false});
        let putData = {
            id: this.state.id,
        };
        putData[this.state.type] = this.state.value;

        this.props.updateRegtransItem(putData);
        console.log('blur', putData)
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
        getRegtransData: () => {
            dispatch(regtransData.getRegtransData());
        },
        updateRegtransItem: (data) => {
            dispatch(updateRegtransItem(data));
        },
    };
}

export default connect(null, mapDispatchToProps)(EditCell);
