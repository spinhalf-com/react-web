import React, { Component } from 'react';
import SidebarSearch from "./sidebar-search";
import Sidebar from "./sidebar";

class LeftContent extends Component {

    render() {
        return (
            <div className="left_content">
                <SidebarSearch/>
                <Sidebar/>
            </div>
        )
    }
}
export default LeftContent;