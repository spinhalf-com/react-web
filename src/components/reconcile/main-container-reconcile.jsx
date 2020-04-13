import React, { Component } from "react";

import Header from "../common/header";
import MainContentReconcile from "./main-content-reconcile";
import Footer from "../common/footer";
import MenuDiv from './rec-balances-div';
import './../../css/reconcile.css';

class MainContainerReconcile extends Component{
    render() {
        return (
            <div className="main_container">
                <Header/>
                <MainContentReconcile/>
                <MenuDiv/>
                <Footer/>
            </div>
        )
    }
}

export default MainContainerReconcile;

