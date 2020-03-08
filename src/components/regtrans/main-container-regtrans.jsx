import React, { Component } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import MainContentRegtrans from './subcomponents/main-content-regtrans';


class MainContainerRegtrans extends Component{

    render() {
        return (
            <div className="main_container">
                <Header/>
                <MainContentRegtrans/>
                <Footer/>
            </div>
        )
    }
}

export default MainContainerRegtrans;

