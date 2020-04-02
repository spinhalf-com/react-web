import React, { Component } from "react";

import Header from "../common/header";
import MainContentReconcile from "./main-content-reconcile";
import Footer from "../common/footer";

class MainContainerReconcile extends Component{
    render() {
        return (
            <div className="main_container">
                <Header/>
                <MainContentReconcile/>
                <Footer/>
            </div>
        )
    }
}

export default MainContainerReconcile;

