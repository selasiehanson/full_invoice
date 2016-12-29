import React, { Component } from 'react';
import MainContainer from '../../containers/MainContainer';
import HeaderContainer from '../../containers/HeaderContainer';
import SideBarContainer from '../../containers/SideBarContainer'
import { connect } from 'react-redux';
import { APP_STATES, ACCOUNT_SET } from '../../constants';
import SignIn from './sign-in';
import { checkAppState } from '../../actions/auth';
import { hashHistory } from 'react-router';


class Layout extends Component {

    componentWillMount() {

        if (this.props.app.state === APP_STATES.NOT_AUTHENTICATED) {
            hashHistory.push('/signin');
        } else {
            this.props.getAppState();
        }

    }

    componentWillReceiveProps(nextProps) {
        let {app} = this.props;
        if (app.justSignedOut) {
            hashHistory.push('/signin');
        }
        if (app.justSignedIn) {
            hashHistory.push('/chooser');
        }
    }


    render() {
        let {children, dispatch, app} = this.props;
        let layout = <div>
            {this.props.children}
        </div>

        if (app.state === APP_STATES.AUTHENTICATED) {
            let sideBar;
            if (app.selectedAccount) {
                sideBar =
                    <SideBarContainer />
            }
            layout = <div>
                <HeaderContainer />
                {sideBar}
                <MainContainer children={children} dispatch={dispatch} />
            </div>
        }

        return (
            <div>
                {layout}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentAccount(accountId) {
            dispatch({
                type: ACCOUNT_SET,
                data: accountId
            })
        },
        getAppState() {
            dispatch(checkAppState());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);