import React, { Component } from 'react';
import { connect } from 'react-redux';
import CryptoList from '../accounts/crypto_list';
import AccountsList from '../accounts/accounts_unrec';
import getCryptos, {cryptos} from '../../store/actions/cryptos';

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

    refreshCryptos(e) {
        e.preventDefault();
        this.props.getCryptos();
    }

    render() {
        return (

            <div className="sidebarmenu">

                <a className='menuitem' href="/#" onClick={(e) => this.refreshCryptos(e)}> Crypto Currencies </a>

                <CryptoList/>

                <a className='menuitem' href="/#"> Accounts </a>

                <AccountsList/>

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
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCryptos: () => {
            dispatch(cryptos.getCryptos());
        }
    };
}

export default connect(null, mapDispatchToProps)(Sidebar);

