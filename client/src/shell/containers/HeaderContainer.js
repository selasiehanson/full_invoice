import { connect } from 'react-redux';

import Header from '../components/layout/Header'

//todo fill body with items from state that should be displayed
const mapStateToProps = (state) => {
    return {
        header: state.header
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)
export default HeaderContainer;