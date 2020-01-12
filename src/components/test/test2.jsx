import React, { Component } from 'react';
import axios from 'axios';
import CryptoValue from "../accounts/crypto_list";

// Our Parent Class
class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            accountBalances: [],
            error: null,
            totalBalance: 0,
            balances_list: 'https://jfr.zapple.co/balances_json',
            data: "Default parent state"
        };
        this.childHandler = this.childHandler.bind(this)
    }

    componentDidMount() {
        this.fetchData();
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    fetchData() {
        axios.get(this.state.balances_list)
            .then(response => {

                this.setState({
                    accountBalances: response.data.cryptos_balances,
                    loading: false,
                    error: null
                });
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: err
                });
            });
    }

    createCryptoList = () => {
        let rows = [];

        this.state.accountBalances.map((array) => (
            rows.push(<tr key={array[0]}>
                <td id={`n`+array[0]} style={{textAlign:'left',color:'darkslategrey'}}>{array[2]}</td>
                <td id={`v`+array[0]} style={{textAlign:'right',color:'darkslategrey'}}>
                    <Child
                        ticker={array[0]}
                        balance={array[1]}
                        parentAction={this.childHandler}
                    />
                </td>
            </tr>)
        ));
        rows.push(
            <tr key='total'>
                <td style={{textAlign:'left',color:'darkslategrey',fontSize:"1em"}}>Total</td>
                <td style={{textAlign:'right',color:'darkslategrey',fontSize:"1em"}}>£{this.state.totalBalance}</td>
            </tr>
        )
        return rows;
    };


    /*
     Function that gets called when
     we bubble up our `return` from Child
    */
    childHandler(dataFromChild) {

        this.setState({
            data: dataFromChild
        },() => console.log('Updated Parent State:', this.state.accountBalances));
    }

    // render() {
    //     /*
    //      Set our childHandler function as a value to a prop that
    //      gets passed down to our Child component
    //     */
    //     return <Child parentAction={this.childHandler} />
    // }

    render() {
        return (
            <div className='submenu'>
                Crypto List
                <ul style={{background:'#E6EAE9'}}><li>
                    <table key={`ct`} style={{width:'100%',padding:'5px'}}>
                        <tbody key={`cb`}>
                            {this.createCryptoList()}
                        </tbody>
                    </table>
                </li></ul>
            </div>
        )
    }

}

export default Parent;

// Child Class
class Child extends Component {
    /*
      Our onClick event will return the function that gets set to our action prop
      that then gets passed into the Parent's childHandler function.
    */
    render() {
        return <a onClick={() => this.props.parentAction('Set Parent state set from child: ' + Math.floor(Math.random() * 999))}>Update Parent</a>;
    }
}

