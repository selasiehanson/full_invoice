import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
    const {appName} = props.header;
    const {logout} = props

    return (
        <div className="header">
            <div className="clearfix">
                <div className="pull-left"> {appName} </div>
                <div className="pull-right app-user"> Welcome Kwesi | <a href="" onClick={(e) => {
                    logout();
                    e.preventDefault();
                } } to="/logout"> Log out </a> </div>
            </div>
        </div>
    )
}


export default Header;