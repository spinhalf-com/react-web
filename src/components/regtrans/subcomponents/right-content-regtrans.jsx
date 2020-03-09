import React, { Component } from 'react';
import RegTransList from './regtrans-list';

class RightContentRegtrans extends Component {

    render() {
        return (
            <div className={"right_content"} id='right_content'>
                <RegTransList/>
            </div>
        )
    }
}
export default RightContentRegtrans;
