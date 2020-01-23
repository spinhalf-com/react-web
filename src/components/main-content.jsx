import React, { Component } from "react";
import CentreContent from './centre-content';
import Menu from "./menu";
import RightContent from "./right-content";

class MainContent extends Component{
    render() {
        return (
            <div className="main_content">
                <Menu/>
                <CentreContent/>
                <div className="clear"></div>
                <RightContent/>
            </div>
        )
    }
}

export default MainContent;

