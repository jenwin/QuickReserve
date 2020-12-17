import React, { Component } from 'react';
import Header from './components/Header';
import GuestName from './components/GuestName';
import Email from './components/Email';
import PhoneNumber from './components/PhoneNumber';
import GuestChecked from './components/GuestChecked';
import GuestDate from './components/GuestDate';
import Time from './components/Time';
import ConfirmButton from './components/ConfirmButton';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      email: "",
      phone: "",
      groups: [ { "id": 0, "group": 2 },
                { "id": 1, "group": 4 },
                { "id": 2, "group": 6 },
                { "id": 3, "group": 8 },
                { "id": 4, "group": 10}

      ],
      guests: "",
      checked: "",
      times: [ { "id": 0, "time": "9:00 AM" },
               { "id": 1, "time": "10:00 AM" },
               { "id": 2, "time": "11:00 AM" },
               { "id": 3, "time": "12:00 PM" },
               { "id": 4, "time": "1:00 PM" },
               { "id": 5, "time": "2:00 PM" },
               { "id": 6, "time": "3:00 PM" },
               { "id": 7, "time": "4:00 PM" },
               { "id": 8, "time": "5:00 PM" },
               { "id": 9, "time": "6:00 PM" },
               { "id": 10, "time": "7:00 PM" },
               { "id": 11, "time": "8:00 PM" }
      ],
      date: "",
      active: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleActive = this.handleActive.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleActive = e => {
    const { times } = this.state;
    const pickedId = Number(e.target.id);
    const selectedTime = times.map(t => pickedId === t.id);
    const index = selectedTime.indexOf(true);
    this.setState({
      active: index
    });
  }

  render() {
    const { times, date, active, first, last, phone, checked, groups, guests, email } = this.state;

    return (
      <div className="app-container">
        <form onSubmit={this.handleSubmit} className="form-container">
          <Header />

          <div className="guest-info-container">
            <GuestName
              first={first}
              last={last}
              handleInput={this.handleInput}
            />

            <Email
              email={email}
              handleInput={this.handleInput}
            />

            <PhoneNumber
              phone={phone}
              handleInput={this.handleInput}
            />

            {/*number of guests*/}
            <GuestChecked
              checked={checked}
              guests={guests}
              groups={groups}
              handleInput={this.handleInput}
            />

            {/*reservation date*/}
            <GuestDate
              date={date}
              handleInput={this.handleInput}
            />

            <Time
              times={times}
              active={active}
              handleActive={this.handleActive}
            />

            <ConfirmButton />
          </div>
        </form>
        <Footer />
      </div>
    );
  }
}

export default App;