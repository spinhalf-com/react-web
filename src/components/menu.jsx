import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component
{
    render() {
        return (
            <div className='menu'>
                <ul style={{align: 'center'}}>
                    <li>
                        <font color='white' size='2em'>
                            Personal Finance Manager
                        </font>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </li>
                    <li>
                        <a className='current' href="https://jfr.zapple.co/logout"
                        >Log
                            Out</a>
                        <ul>
                            <form id="logout-form" action="https://jfr.zapple.co/logout" method="POST"
                                  style={{display: 'none'}}><input type="hidden" name="_token"
                                                                   value="8EnnVMORtLXH9krA1OfLFdHOPVPYN4ZScrpXHQz9"/>
                            </form>
                        </ul>
                    </li>
                    <li>
                        <Link className={'current'} to="/">Enter</Link>
                        <ul></ul>
                    </li>
                    <li>
                        <Link className={'current'} to="/reconcile">Reconcile</Link>
                        <ul></ul>
                    </li>
                    <li>
                        <Link className={'current'} to="/regtrans">Regular Transactions</Link>
                        <ul></ul>
                    </li>
                    <li>
                        <Link className={'current'} to="/mileage">Mileage</Link>
                        <ul></ul>
                    </li>
                    <li>
                        <Link className={'current'} to="/map">Map</Link>
                        <ul></ul>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Menu;