import React, { Component } from 'react';

class Time extends Component {
  render() {
    const { times, active } = this.props;

    return (
      <div className="time-container">
        <p
          className="time-label"
          tabIndex="0">
            Select a Time
        </p>
        {times.map(t => (
        <input
          className={`${active === t.id ? 'selected-time' : 'unselected'} ${"time-btn"}`}
          type="button"
          id={t.id}
          key={t.id}
          value={t.time}
          onClick={this.props.handleActive}
        />
        ))}
      </div>
    );
  }
}

export default Time;