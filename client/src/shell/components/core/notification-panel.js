import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { showNotification, hideNotification } from '../../actions';

export default class NotificationPanel extends Component {
    constructor(props) {
        super(props);
        this.timer = 0;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.notification.display) clearTimeout(this.timer);
    }

    componentDidUpdate() {
        const { display } = this.props.notification;

        if (display) this.timer = setTimeout(() => this.props.dispatch(hideNotification()), 5000);
    }

    render() {
        const { type, content, display } = this.props.notification;
        const classForDisplay = cx('row notify-panel-holder', { 'show': display, hidden: !display });
        const cssForPanel = cx('notify-panel col-md-6 col-md-offset-3', 'bg-' + (type === 'success' ? 'success' : (type === 'error' ? 'danger' : type)));

        return (
            <div className={classForDisplay}>
                <div className={cssForPanel}>
                    <p className="fs-16">{content}</p>
                </div>
            </div>
        );
    }
}

NotificationPanel.PropTypes = {
    notification: PropTypes.object.isRequired
};
