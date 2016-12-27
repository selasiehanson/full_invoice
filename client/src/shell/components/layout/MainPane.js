import React from 'react';
import NotificationPanel from '../core/notification-panel'


const MainPane = (props) => {
    let {children, dispatch, notification} = props;
    console.log(props)
    return (
        <div className="app-content">
            <NotificationPanel dispatch={dispatch} notification={notification} />
            {props.children}
        </div>
    )
}

export default MainPane;