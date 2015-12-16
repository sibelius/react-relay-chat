import React from 'react';

import MessageListItem from './MessageListItem';
import MessageComposer from './MessageComposer';

const MOCK_MESSAGES = [
  {
    id: '1',
    authorName: 'Fry',
    date: new Date(),
    text: 'Hello Leela',
  },
  {
    id: '2',
    authorName: 'Leela',
    date: new Date(),
    text: 'Hello Fry!',
  }
];

const MOCK_THREAD_ID = {
  id: '1',
  name: 'Fry',
};

export default class MessageSection extends React.Component {
  render () {
    // var messageListItems = this.state.messages.map(getMessageListItem);
    let messageListItems = MOCK_MESSAGES.map((message) => {
      return (
        <MessageListItem
          key={message.id}
          message={message}
        />
      )
    });
    let thread = MOCK_THREAD_ID;
    return (
      <div className="message-section">
        <h3 className="message-thread-heading">{thread.name}</h3>
        <ul className="message-list" ref="messageList">
          {messageListItems}
        </ul>
        <MessageComposer threadID={thread.id}/>
      </div>
    )
  }
}