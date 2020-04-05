import React, { Component } from 'react';
import LeftContent from './../common/left-content';
import RightContentFitbit from './right-content-fitbit';


class CentreContentFitbit extends Component {
    render() {
        return (<div className='center_content'>
            <LeftContent/>
            <RightContentFitbit/>
        </div>)
    }
}

export default CentreContentFitbit;