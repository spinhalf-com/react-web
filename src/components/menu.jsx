import React, { Component } from 'react';

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
                            // onClick="event.preventDefault(); document.getElementById('logout-form').submit();"
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
                        <a className='current' href='https://jfr.zapple.co'>Home</a>
                        <ul></ul>
                    </li>
                    <li>
                        <a className='current' href='https://jfr.zapple.co/enter'>Enter</a>
                        <ul></ul>
                    </li>
                    <li>
                        <a className='current' href='https://jfr.zapple.co/reconcile'>Reconcile</a>
                        <ul></ul>
                    </li>
                    <li>
                        <a className='current' href='https://jfr.zapple.co/regtrans'>Regular Transactions</a>
                        <ul></ul>
                    </li>
                    <li>
                        <a className='current' href='https://jfr.zapple.co/mileage'>Mileage</a>
                        <ul></ul>
                    </li>
                    <li>
                        <a className='current' href='https://jfr.zapple.co/pedometer'>Pedometer</a>
                        <ul></ul>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Menu;