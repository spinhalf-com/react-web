import React, { Component } from 'react';
import { connect } from "react-redux";

class RecBalancesDiv extends Component {
    // constructor(props) {
    //     super(props);
    //
    //
    // }

    componentDidMount() {
        this._isMounted = true;
    }

    handleChange(e) {

    }

    render() {
        return (
            <div className="rec-balances-div">
                <ul className='rec-balances-list'>
                    <li>
                        <input type = 'text' name = 'sb' readOnly className="rec-balances-div-box" value={this.props.reconciled_total || ""}/>
                    </li>
                    <li>
                        <input type = 'text' name = 'cb' readOnly className="rec-balances-div-box" value={this.props.candidate_total || ""}/>
                    </li>
                    <li>
                        <input type = 'text' name = 'eb' readOnly className="rec-balances-div-box" value={this.props.running_total || ""}/>
                    </li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reconciled_total: state.reconcile.reconciled_total,
        candidate_total: state.reconcile.candidate_total,
        running_total: state.reconcile.running_total,
        unreconciled_total: state.reconcile.unreconciled_total
    };
}

export default connect(mapStateToProps, null)(RecBalancesDiv);