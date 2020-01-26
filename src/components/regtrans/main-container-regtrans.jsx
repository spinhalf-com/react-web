import React, { Component } from "react";

import Header from "../common/header";
import MainContent from "../common/main-content";
import Footer from "../common/footer";

class MainContainerRegtrans extends Component{
    render() {
        return (
            <div className="main_container">
                <Header/>
                <MainContent/>
                <Footer/>
            </div>
        )
    }
}

export default MainContainerRegtrans;

