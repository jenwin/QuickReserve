import React, { Component } from 'react';

class GuestChecked extends Component {
  render() {
    const { checked, guests, groups, handleInput } = this.props;
    const numChecked = Number(checked);

    return (
      <div className="guest-checked-container">
        <label
          tabIndex="0"
          className="guest-label guest-checked-label"
          htmlFor="guests">
            Number of Guests
        </label>
        <div className="guest-checked-inner-container">
          {groups.map(g => (
          <label
            htmlFor="number-guests"
            key={g.id}>
          <input
            type="radio"
            className="guest-radio"
            id={g.id}
            key={g.id}
            name="checked"
            checked={numChecked === g.group}
            value={g.group}
            onChange={handleInput}
          />
          <span
            tabIndex="0"
            className="guest-number">
              {g.group}
          </span>
          </label>
          ))}
          <div
            className="guests-more"
            tabIndex="0">
              (If party is greater than 10, enter number of guests below.)
          </div>
          <input
            className="guest-input"
            type="number"
            id="guests"
            name="guests"
            placeholder="Enter Number of Guests"
            value={guests}
            onChange={handleInput}
          />
        </div>
      </div>
    );
  }
}

export default GuestChecked;