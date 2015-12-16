import React, { PropTypes } from 'react';

var ENTER_KEY_CODE = 13;

export default class MessageComposer extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    threadID: PropTypes.string.isRequired,
  };

  state = {
    text: ''
  };

  render () {
    return (
      <textarea
        className="message-composer"
        name="message"
        value={this.state.text}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
      />
    )
  }

  _onChange = (event, value) => {
    this.setState({
      text: event.target.value
    });
  }

  _onKeyDown = (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      let text = this.state.text.trim();
      if (text) {
        console.log('create Message: ', text);
      }
      this.setState({text: ''});
    }
  }
}