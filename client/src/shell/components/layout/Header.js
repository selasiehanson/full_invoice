import React from 'react';

const Header = (props) => {
    const {appName} = props.header;
    return (
        <div className="header">
            {appName}

        </div>
    )
}

export default Header;