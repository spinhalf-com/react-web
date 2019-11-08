import React, { Component } from 'react';

class Sidebar extends Component
{
    render() {
        return (
            <sidebar>
                <div className="left_content">
                    <div className="sidebar_search">
                        <form>
                            <input type="text" name="" className="search_input" value="search..."
                                   onClick="this.value=''"/>
                            <input type="image" className="search_submit"
                                   src="https://jfr.zapple.co/images/search.png"/>
                        </form>
                    </div>

                    <div className="sidebarmenu">

                        <a className='menuitem submenuheader' href=''>Crypto Currencies </a>
                        <div className='submenu'>
                            <ul style={{background:'#E6EAE9'}}>
                                <table style={{width:'100%',padding:'5px'}}>
                                    <tr>
                                        <td style={{textAlign:'left',color:'darkslategrey'}}>Bitcoin</td>
                                        <td style={{textAlign:'right',color:'darkslategrey'}}>&pound;4,743.07</td>
                                    </tr>

                                    <tr>
                                        <th style={{textAlign:'left',color:'darkslategrey'}}>TOTAL</th>
                                        <th style={{textAlign:'right',color:'darkslategrey'}}>&pound;5,681.08</th>
                                    </tr>
                                </table>
                            </ul>
                        </div>

                        <a className='menuitem submenuheader' href=''>Balances <font
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

                        <a className='menuitem submenuheader' href='' headerindex>Balances <font
                            color='blue'> (Unreconciled)</font>

                            <span className='accordsuffix'>
		                        <img className='statusicon' src='../assets/images/plus.gif'/>
	                        </span>
                        </a>
                        <div className='submenu'>
                            <ul style={{background:'#E6EAE9'}}>
                                <ul style={{background:'#E6EAE9',padding:'5px;'}}>
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
            </sidebar>
        )
    }
}

export default Sidebar;