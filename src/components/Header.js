import React from 'react';

const Header = () => {
  return (
    <div className="header-container">
      <div className="title-container">
        <label
          className="title"
          tabIndex="0">
            Reserve a Table
        </label>
      </div>
      <div className="paragraph-container">
        <p
          className="para-one"
          tabIndex="0">
            Please fill in the form to schedule a reservation!
        </p>
      </div>
    </div>
  );
}

export default Header;