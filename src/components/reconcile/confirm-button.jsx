import React from 'react';
import { connect } from 'react-redux';
import { submitEntries } from '../../store/actions/reconcile';

const ConfirmButton = (props) => {
    const submitEntries = () => {
        props.submitPostEntries({
            month: props.month,
            year: props.year,
            ids: props.selectedEntries
        });
    };

    return (
        <button value='Confirm' id='confirm' onClick={(e) => submitEntries()}>
            Confirm
        </button>
    );
};

function mapStateToProps(state) {
    return {
        selectedEntries: state.regtrans.selectedEntries,
        month: state.regtrans.month,
        year: state.regtrans.year
    };
}

function mapDispatchToProps(dispatch) {
    return {
        submitPostEntries: (data) => {
            dispatch(submitEntries(data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmButton);
