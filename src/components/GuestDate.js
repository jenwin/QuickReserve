import React, { Component } from 'react';

class GuestDate extends Component {
  render() {
    const { date, handleInput } = this.props;

    return (
      <div className="date-container">
        <label
          tabIndex="0"
          className="guest-label date-label"
          htmlFor="date">
            Select a Date
        </label>
        <input
          className="date"
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleInput}
        />
      </div>
    );
  }
}

export default GuestDate;