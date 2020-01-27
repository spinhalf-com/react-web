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
                <input value={this.props.value} style={{width: this.props.width}}/>
            </div>
        )
    }
}
export default EditInput;
