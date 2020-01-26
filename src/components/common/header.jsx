import React, { Component } from 'react';
import logo from '../../assets/images/SpinHalf.png';

class Header extends Component
{
    render() {
        return (

            <div className="header">
                <div className="logo">
                    <a href="/#">
                        <img src={logo} alt="logo" title="" border="0" width="100" height="50"/>
                    </a>
                </div>
                <div className="right_header">
                    <span>
                        Welcome John Riordan
                        <a href="http://www.spinhalf.com"><font color='blue'>Goto Spinhalf</font></a>
                        <a className='current' href="https://jfr.zapple.co/logout"
                           // onClick="event.preventDefault(); document.getElementById('logout-form').submit();"
                        >Log Out</a>
                    </span>
                </div>
                <div className="jclock"></div>
            </div>


        )
    }
}

export default Header;