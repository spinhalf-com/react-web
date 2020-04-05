import React, { Component } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
// import MainContentUnits from './subcomponents/main-content-units';


class MainContainerUnits extends Component{

    render() {
        return (
            <div className="main_container">
                <Header/>
                {/*<MainContentUnits/>*/}
                <Footer/>
            </div>
        )
    }
}

export default MainContainerUnits;

