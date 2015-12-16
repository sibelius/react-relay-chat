import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class ThreadListItem extends React.Component {
  static propTypes = {
    thread: PropTypes.object,
    currentThreadID: PropTypes.string,
  };

  render() {
    const { thread, currentThreadID } = this.props;
    let lastMessage = thread.lastMessage;
    return (
      <li
        className={classNames({
          'thread-list-item': true,
          'active': thread.id == currentThreadID
        })}
        onClick={this._onClick}>
        <h5 className="thread-name">{thread.name}</h5>
        <div className="thread-time">
          {lastMessage.date.toLocaleTimeString()}
        </div>
        <div className="thread-last-message">
          {lastMessage.text}
        </div>
      </li>
    );
  }

  _onClick = () => {
    console.log('onClick: ', this.props.thread.id)
  }
}