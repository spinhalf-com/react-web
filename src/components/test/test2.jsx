import React, { Component } from 'react';
import axios from 'axios';

// Our Parent Class
class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // accountBalances: [],
            // error: null,
            totalBalance: 0,
            balances_list: 'https://jfr.zapple.co/balances_json',
            data: "Default parent state"
        };

        /*
         Bind our childHandler function to this context
         that will get called from our Child component
        */
        this.childHandler = this.childHandler.bind(this)
        //this.runningTotal = this.runningTotal.bind(this)
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


    /*
     Function that gets called when
     we bubble up our `return` from Child
    */
    childHandler(dataFromChild) {
        // log our state before and after we updated it
        console.log('%cPrevious Parent State: ' + JSON.stringify(this.state), "color:orange");
        this.setState({
            data: dataFromChild
        },() => console.log('Updated Parent State:', this.state));
    }

    render() {
        /*
         Set our childHandler function as a value to a prop that
         gets passed down to our Child component
        */
        return <Child parentAction={this.childHandler} />
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

