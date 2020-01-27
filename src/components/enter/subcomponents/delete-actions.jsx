import React, { Component } from 'react';


class DeleteActions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            divId: "dconf"+this.props.id
        }
    }

    revealButtons(event) {
        this.setState({hoverReveal: true});
    }

    hideButtons(event) {
        this.setState({hoverReveal: true});
    }

    render() {
        return (
            <div key={this.state.divId}>
                <button
                    type="button"
                    onClick={this.props.cancelAction}
                    className={"btn btn-warning cancelDel"}
                >Cancel Delete
                </button>
                <button
                    type="button"
                    onClick={this.props.confirmAction}
                    className={"btn btn-danger deleteRow"}
                >Confirm Delete
                </button>
            </div>
        )
    }
}
export default DeleteActions;
