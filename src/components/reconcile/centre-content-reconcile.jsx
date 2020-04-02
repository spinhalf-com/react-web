import React, { Component } from 'react';
import LeftContent from './../common/left-content';
import RightContentReconcile from './right-content-reconcile';


class CentreContentReconcile extends Component {
    render() {
        return (<div className='center_content'>
            <LeftContent/>
            <RightContentReconcile/>
        </div>)
    }
}

export default CentreContentReconcile;