import React, { Component } from 'react';
import ReconcileList from './reconcile-list';

class RightContentReconcile extends Component {

    render() {
        return (
            <div className={"right_content"} id='right_content'>
                <ReconcileList/>
            </div>
        )
    }
}
export default RightContentReconcile;
