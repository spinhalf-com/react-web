import React, { Component } from 'react';
// import Functions from '../functions';
import CryptoList from './accounts/crypto_list'

class Sidebar extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            pricesArray: [],
            loading: true,
            error: null,
            crypto_price_url: 'https://min-api.cryptocompare.com/data/price?tsyms=GBP&fsym=',
            crypto_list: 'https://jfr.zapple.co/balances_json',
            crypto_price_url2: 'https://cryptomate.co.uk/api/all/GBP'
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
            <div>
                <div className="left_content">
                    <div className="sidebar_search">
                        {/*<form>*/}
                            {/*<input type="text" name="" className="search_input" value="search..."/>*/}
                            {/*<input type="image" className="search_submit"*/}
                                   {/*src="https://jfr.zapple.co/images/search.png"/>*/}
                        {/*</form>*/}
                    </div>

                    <div className="sidebarmenu">

                        <a className='menuitem submenuheader' href="/#">Crypto Currencies </a>

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
                </div>
            </div>
        )
    }
}

export default Sidebar;