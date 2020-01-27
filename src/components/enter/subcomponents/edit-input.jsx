import React, { Component } from 'react';


class EditInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "test"
        }
    }

    render() {
        return (
            <div>
                <input defaultValue={this.props.value} onChange={e => this.props.saveEdits(e)} style={{width: this.props.width}}/>
            </div>
        )
    }
}
export default EditInput;
