import React, { Component } from "react";
import CentreContentFitbit from './centre-content-fitbit';
import Menu from "./../common/menu";

class MainContentFitbit extends Component{
    render() {
        return (
            <div className="main_content">
                    <Menu/>
                    <CentreContentFitbit/>
                <div className="clear"></div>
            </div>
        )
    }
}

export default MainContentFitbit;

