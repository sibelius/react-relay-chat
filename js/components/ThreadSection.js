import React from 'react';

import ThreadListItem from './ThreadListItem';

var MOCK_THREADS = [
  {
    id: '1',
    name: 'Fry',
    lastMessage: {
      date: new Date(),
      text: 'Hello Leela',
    },
  },
  {
    id: '2',
    name: 'Leela',
    lastMessage: {
      date: new Date(),
      text: 'Hello Fry!',
    },
  },
];

var MOCK_CURRENT_THREAD_ID = '1';

export default class ThreadSection extends React.Component {
  render () {
    let currentThreadID = MOCK_CURRENT_THREAD_ID;

    //let unread = this.state.unreadCount === 0 ?
    //  null :
    //  <span>Unread threads: {this.state.unreadCount}</span>;
    let unread = <span>Unread threads: 2</span>;

    //let threadListItems = this.state.threads.map(function(thread) {
    //  return (
    //    <ThreadListItem
    //      key={thread.id}
    //      thread={thread}
    //      currentThreadID={this.state.currentThreadID}
    //    />
    //  );
    //}, this);

    let threadListItems = MOCK_THREADS.map((thread) => {
      return (
        <ThreadListItem
          key={thread.id}
          thread={thread}
          currentThreadID={currentThreadID}
        />
      );
    }, this);
    return (
      <div className="thread-section">
        <div className="thread-count">
          {unread}
        </div>
        <ul>
          {threadListItems}
        </ul>
      </div>
    )
  }
}