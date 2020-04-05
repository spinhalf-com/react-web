import React, { Component } from "react";
import MainContentFitbit from './main-content-fitbit';
import Header from './../common/header';
import Footer from './../common/footer';
// import './../../css/fitbit.css';

class MainContainerFitbit extends Component{
    render() {
        return (
            <div className="main_content">
                <Header/>
                    <MainContentFitbit/>
                <Footer/>
            </div>
        )
    }
}
export default MainContainerFitbit;