import React, { Component } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
// import MainContentFood from './subcomponents/main-content-food';


class MainContainerFood extends Component{

    render() {
        return (
            <div className="main_container">
                <Header/>
                {/*<MainContentFood/>*/}
                <Footer/>
            </div>
        )
    }
}

export default MainContainerFood;

