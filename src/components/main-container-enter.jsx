import React, { Component } from "react";
// import { connect } from "react-redux";

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

