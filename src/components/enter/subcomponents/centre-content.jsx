import React, { Component } from 'react';
import LeftContent from "../../left-content";
import RightContent from "./right-content";

class CentreContent extends Component {
    render() {
        return (<div className='center_content'>
            <LeftContent/>
            <RightContent/>
        </div>)
    }
}

export default CentreContent;