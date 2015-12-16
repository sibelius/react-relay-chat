import React, { PropTypes } from 'react';

export default class MessageListItem extends React.Component {
  static propTypes = {
    message: PropTypes.object,
  };

  render() {
    const { message } = this.props;
    return (
      <li className="message-list-item">
        <h5 className="message-author-name">{message.authorName}</h5>
        <div className="message-time">
          {message.date.toLocaleTimeString()}
        </div>
        <div className="message-text">{message.text}</div>
      </li>
    );
  }
}