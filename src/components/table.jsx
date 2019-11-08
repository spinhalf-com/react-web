import React, { Component } from 'react';
import axios from "axios";
import '../css/table.css';
import Fucntions from '../functions/functions';

class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            loading: true,
            error: null,
            source: 'todos'
        };
    }

    componentDidMount() {
        this.fetchData();
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    fetchData() {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => {
                const posts = res.data;

                this.setState({
                    posts,
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

    uuidGenerated = () => {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };

    createHeader = () => {
        return (
            <tr>
                <th>User</th>
                <th>ID</th>
                <th>Title</th>
                <th>Uuid</th>
            </tr>
        )
    };

    createTable = () => {
        let table = [];

        for (let i = 0; i < this.state.posts.length; i++) {
            let children = [];
            children.push(
                <td key={`a`+i}>
                    {this.state.posts[i]['userId']}
                </td>,
                <td key={`b`+i}>
                    {this.state.posts[i]['id']}
                </td>,
                <td key={`c`+i}>
                    {this.state.posts[i]['title']}
                </td>,
                <td key={`d`+i}>
                    { Fucntions.uuidGenerated() }
                </td>
            );
            table.push(<tr key={i} id={this.state.posts[i]['id']}>{children}</tr>)
        }
        return table;
    };

    render() {
        return(
            <table className="zui-table">
                <thead id='head'>
                    {this.createHeader()}
                </thead>
                <tbody id='tbody'>
                    {this.createTable()}
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        )
    }
}

export default Table;
