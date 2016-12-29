import React, { Component } from 'react';
import MainContainer from '../../containers/MainContainer';
import HeaderContainer from '../../containers/HeaderContainer';
import SideBarContainer from '../../containers/SideBarContainer'
import { connect } from 'react-redux';
import { APP_STATES } from '../../constants';
import SignIn from './sign-in';
import { checkAppState } from '../../actions/auth';
import { hashHistory } from 'react-router';


class Layout extends Component {

    componentWillMount() {
        // console.log(this.props);
        // this.props.getAppState();
        let {app} = this.props;
        console.log(app)
        if (app.state === APP_STATES.NOT_AUTHENTICATED) {
            console.log('redirect')
            hashHistory.push('/signin');
        }
        if (app.state === APP_STATES.AUTHENTICATED) {
            hashHistory.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props);
        console.log("receiving props");
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        let {children, dispatch, app} = this.props;
        console.log(app)

        let layout = <div>
            {this.props.children}
        </div>

        if (app.state === APP_STATES.AUTHENTICATED) {
            layout = <div>
                <HeaderContainer />
                <SideBarContainer />
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
        getAppState() {
            dispatch(checkAppState());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);