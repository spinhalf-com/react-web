import React, { Component } from 'react';


class DeleteButtons extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div id="d39749" style={{display: "none"}}>

                <button type="button" id="confirmDel39749" delid="39749"
                        className={"btn btn-default confirmDel"}>Delete
                </button>
            </div>
                <div id="dconf39749" style={{display:"none"}}>
                    <button type="button" id="canceldelrow39749" delid="39749"
                            className={"btn btn-warning cancelDel"}>Cancel Delete
                    </button>
                    <button type="button" id="confirmdelrow39749" delid="39749"
                            className={"btn btn-danger deleteRow"}>Confirm Delete
                    </button>
                </div>
            </div>
        )
    }
}
export default DeleteButtons;
