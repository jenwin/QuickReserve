import React, { Component } from 'react';

class Email extends Component {
  render() {
    const { email, handleInput } = this.props;

    return (
      <div className="email-container">
        <label
          tabIndex="0"
          htmlFor="email"
          className="guest-label email">
            Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="Email"
          onChange={handleInput}
        />
      </div>
    );
  }
}

export default Email;