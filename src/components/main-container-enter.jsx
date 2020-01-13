import React, { Component } from "react";

import Header from "./header";
import MainContent from "./main-content";
import Footer from "./footer";

class MainContainerEnter extends Component{
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

export default MainContainerEnter;

