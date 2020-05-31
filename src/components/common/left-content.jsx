import React, { Component } from 'react';
import SidebarSettings from "./sidebar-settings";
import Sidebar from "./sidebar";

class LeftContent extends Component {

    render() {
        return (
            <div className="left_content">
                <SidebarSettings/>
                <Sidebar/>
            </div>
        )
    }
}
export default LeftContent;