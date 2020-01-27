import React, { Component } from 'react';
import DeleteActions from "./delete-actions";

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
        console.log(this.state);
    }

    hideButtons(event) {
        this.setState({ clickReveal: false});
        console.log(this.state);
    }

    confirmDelete() {
        // send id to redux/axios etc
    }

    render() {
        return (
            <div>
                {
                    this.state.clickReveal ?
                        <DeleteActions
                            confirmAction={() => this.confirmDelete()}
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
export default DeleteButtons;
