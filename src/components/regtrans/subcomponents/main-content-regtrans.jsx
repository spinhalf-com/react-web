import React, { Component } from "react";
import CentreContentRegtrans from './centre-content-regtrans';
import Menu from "./../../common/menu";

class MainContentRegtrans extends Component{
    render() {
        return (
            <div className="main_content">
                <Menu/>
                <CentreContentRegtrans/>
                <div className="clear"></div>
            </div>
        )
    }
}

export default MainContentRegtrans;

