import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ACCOUNT_SELECTED } from '../../constants';
import { hashHistory } from 'react-router';
import { checkAppState } from '../../actions/auth';

class AccountChooser extends Component {

    componentWillMount() {
        //this.props.getAppState();
    }

    componentWillReceiveProps() {
        console.log(this.props.app)
        if (this.props.app.selectedAccount) {
            hashHistory.push('/dashboard')
        }
    }

    render() {
        console.log(this.props);
        let {onAcccountSelected} = this.props;
        return (
            <div>
                <div className="content-header">
                    <span className="title"> Select an Account </span>
                </div>
                <a href="" onClick={() => onAcccountSelected(1)} className="btn btn-primary"> Account 1 </a>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAcccountSelected(accountId) {
            dispatch({
                type: ACCOUNT_SELECTED,
                data: accountId
            })
        },
        getAppState() {
            dispatch(checkAppState());
        }
    }
}
AccountChooser = connect(mapStateToProps, mapDispatchToProps)(AccountChooser);
export default AccountChooser;