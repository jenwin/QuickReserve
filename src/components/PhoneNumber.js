import React, { Component  } from 'react';

class PhoneNumber extends Component {
  render() {
    const { phone, handleInput } = this.props;

    return (
      <div className="phone-container">
        <label
          tabIndex="0"
          className="guest-label phone-number"
          htmlFor="phone">
            Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="###-###-####"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={phone}
          onChange={handleInput}
        />
      </div>
    );
  }
}

export default PhoneNumber;