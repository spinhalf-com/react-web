import React, { Component } from 'react';
import { connect } from "react-redux";
import { regtransData } from '../../../store/actions/regtrans';
import '../../../css/regtrans.css';

class Checker extends Component {
    // constructor(props) {
    //     super(props);
    //
    //
    // }

    componentDidMount() {
        this._isMounted = true;
    }

    handleChange(e) {

    }

    render() {
        return (
            <input type="checkbox" key={this.props.id} checked={this.props.checked} onChange={(e) => this.handleChange(e)}></input>
        )
    }

}

function mapStateToProps(state) {
    return {
        checkState: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getRegtransData: () => {
            dispatch(regtransData.getRegtransData());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checker);
