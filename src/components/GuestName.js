import React, { Component } from 'react';

class GuestName extends Component {
  render() {
    const { first, last, handleInput } = this.props;

    return (
      <div className="name-container">
        {/*first name*/}
        <div className="first-container">
          <label
            className="guest-label first-name"
            htmlFor="first"
            tabIndex="0">
              First Name
          </label>
          <input
            type="text"
            id="first"
            name="first"
            placeholder="First Name"
            value={first}
            onChange={handleInput}
            required
          />
        </div>

        {/*last name*/}
        <div className="last-container">
          <label
            className="guest-label last-name"
            htmlFor="last"
            tabIndex="0">
              Last Name
          </label>
          <input
            type="text"
            id="last"
            name="last"
            placeholder="Last Name"
            value={last}
            onChange={handleInput}
            required
          />
        </div>
      </div>
    );
  }
}

export default GuestName;