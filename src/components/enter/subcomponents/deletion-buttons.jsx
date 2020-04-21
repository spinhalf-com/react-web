import React, { Component } from 'react';
import { connect } from "react-redux";

import DeleteActions from "./delete-actions";
import { deleteTransactionItem } from "../../../store/actions/transactions";

class DeleteButtons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "d"+this.props.id,
            clickReveal: false
        };
        this.hideButtons = this.hideButtons.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
    }

    revealButtons(event) {
        this.setState({ clickReveal: true});
        //console.log(this.state);
    }

    hideButtons(event) {
        this.setState({ clickReveal: false});
        //console.log(this.state);
    }

    confirmDelete(id) {
        this.props.deleteTransactionItem(id)
    }

    render() {
        return (
            <div>
                {
                    this.state.clickReveal ?
                        <DeleteActions
                            confirmAction={(e) => this.confirmDelete(this.props.id)}
                            cancelAction={() => this.hideButtons()}
                            id={this.props.id}
                        />
                    :
                    <div>
                        <div id={this.state.id}>
                            <button
                                type="button"
                                id="confirmDel39749"
                                delid="39749"
                                onClick={e => this.revealButtons(e)}
                                className={"btn btn-default confirmDel"}
                                onMouseOver={this.props.mouseIn}
                                onMouseOut={this.props.mouseOut}
                            >Delete</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        deleteTransactionItem: (id, data) => {
            dispatch(deleteTransactionItem(id, data));
        },
    };
}

export default connect(null, mapDispatchToProps)(DeleteButtons);

