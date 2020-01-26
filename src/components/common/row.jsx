import React from 'react';
import ReactDOM from 'react-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import axios from 'axios';

class Row extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        // Remove the 'www.' to cause a CORS error (and see the error state)
        axios.get(`https://jsonplaceholder.typicode.com/${this.props.source}`)
            .then(res => {
                // Transform the raw data by extracting the nested posts
                const posts = res.data;

                // Update state to trigger a re-render.
                // Clear any errors, and turn off the loading indiciator.
                this.setState({
                    posts,
                    loading: false,
                    error: null
                });
            })
            .catch(err => {
                // Something went wrong. Save the error in state and re-render.
                this.setState({
                    loading: false,
                    error: err
                });
            });
    }

    renderLoading() {
        return <div>Loading...</div>;
    }

    renderError() {
        return (
            <div>
                Uh oh: {this.state.error.message}
            </div>
        );
    }

    renderPosts() {
        if(this.state.error) {
            return this.renderError();
        }

        return (
            <ul>
                {this.state.posts.map(post =>
                    <li key={post.id}>{post.title}</li>
                )}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <h1>{`${this.props.source}`}</h1>
                {this.state.loading ?
                    this.renderLoading()
                    : this.renderPosts()}
            </div>
        );
    }
}

export default Row;