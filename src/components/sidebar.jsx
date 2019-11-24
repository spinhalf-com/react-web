import React, { Component } from 'react';
import CryptoList from './accounts/crypto_list';
import SideBarMenuTop from '../assets/images/sidebar_menu_top.gif';
console.log(SideBarMenuTop);

class Sidebar extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (

            <div className="sidebarmenu">

                <a className='menuitem submenuheader' href="/#"
                   style={{
                       backgroundImage: `url(${SideBarMenuTop})`,
                       backgroundPosition: 'center',
                       backgroundSize: 'cover',
                       backgroundRepeat: 'no-repeat'
                   }}
                > Crypto Currencies </a>

                <CryptoList/>


                <a className='menuitem submenuheader' href="/#">Balances <font
                    color='blue'> (Reconciled)</font></a>
                <div className='submenu'>
                    <ul style={{background:'#E6EAE9', padding:'5px'}}>
                        <li>
                            <div style={{border:'solid',borderColor:'#E6EAE9',borderWidth:'1px'}}>
                                <div float='left' width='100px'>Barclays Current:</div>
                                <div align='right' width='100px' float='left'><font color="black">£515.10</font>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div style={{border:'solid',borderColor:'#E6EAE9',borderWidth:'1px'}}>
                                <div float='left' width='100px'>Tesco Strawberry:</div>
                                <div align='right' width='100px' float='left'><font color="red">£-7551.44</font>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <a className='menuitem submenuheader'href="/#">Balances <font
                    color='blue'> (Unreconciled)</font>

                    <span className='accordsuffix'>
                        <img className='statusicon' src='../assets/images/plus.gif' alt={'link'}/>
                    </span>
                </a>
                <div className='submenu'>
                    <ul style={{background:'#E6EAE9'}}>
                        <ul style={{background:'#E6EAE9',padding:'5px'}}>
                            <li>
                                <div style={{border:'solid',borderColor:'#E6EAE9',borderWidth:'1px'}}>
                                    <div float='left' width='100px'>Barclays Current:</div>
                                    <div align='right' width='100px' float='left'><font
                                        color="black">£484.04</font></div>
                                </div>
                            </li>

                            <li>
                                <div style={{border:'solid',borderColor:'#E6EAE9',borderWidth:'1px'}}>
                                    <div float='left' width='100px'>Tesco Strawberry:</div>
                                    <div align='right' width='100px' float='left'><font
                                        color="black">£0.00</font></div>
                                </div>
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;