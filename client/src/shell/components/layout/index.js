import React from 'react';
import MainContainer from '../../containers/MainContainer';
import HeaderContainer from '../../containers/HeaderContainer';
import SideBarContainer from '../../containers/SideBarContainer'

const Layout = (props) => {
    console.log(props)
    let {children, dispatch} = props;
    return (
        <div>
            <HeaderContainer />
            <SideBarContainer />
            <MainContainer children={children} dispatch={dispatch} />
        </div>
    )
}

export default Layout;