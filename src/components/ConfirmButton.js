import React, { Component } from 'react';

class ConfirmButton extends Component {
  render() {
    return (
      <div className="button-container">
        <button
          type="submit"
          className="confirm-btn">
            Confirm
        </button>
      </div>
    );
  }
}

export default ConfirmButton;