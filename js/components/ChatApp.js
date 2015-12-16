import React from 'react';

import ThreadSection from './ThreadSection';
import MessageSection from './MessageSection';

export default class ChatApp extends React.Component {
  render() {
    return (
      <div className="chatapp">
        <ThreadSection />
        <MessageSection />
      </div>
    )
  }
}