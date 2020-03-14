import React, { Component } from 'react';
import LeftContent from './../../common/left-content';
import RightContentRegtrans from './right-content-regtrans.jsx'


class CentreContentRegtrans extends Component {
    render() {
        return (<div className='center_content'>
            <LeftContent/>
            <RightContentRegtrans/>

        </div>)
    }
}

export default CentreContentRegtrans;