import React, { Component } from 'react';
import FitbitPage from './fitbit-page';

class RightContentFitbit extends Component {

    render() {
        return (
            <div className={"right_content"} id='right_content'>
                <FitbitPage/>
            </div>
        )
    }
}
export default RightContentFitbit;
