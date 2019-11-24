import React, { Component } from "react";
import CentreContent from './centre-content';
import Menu from "./menu";

class MainContent extends Component{
    render() {
        return (
            <div className="main_content">
                <Menu/>
                <CentreContent/>
                <div className="clear"></div>
            </div>
        )
    }
}

export default MainContent;

