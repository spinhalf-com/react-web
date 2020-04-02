import React, { Component } from "react";
import CentreContentReconcile from './centre-content-reconcile';
import Menu from "./../common/menu";

class MainContentReconcile extends Component{
    render() {
        return (
            <div className="main_content">
                <Menu/>
                <CentreContentReconcile/>
                <div className="clear"></div>
            </div>
        )
    }
}

export default MainContentReconcile;

