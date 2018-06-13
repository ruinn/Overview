import React from 'react';
import PropTypes from 'prop-types';

const getGuests = () => {
  const guests = [];
  for (let i = 1; i < 81; i += 1) {
    if (i === 1) {
      guests.push(`${i} Guest`);
    } else {
      guests.push(`${i} Guests`);
    }
  }
  return guests;
};

const guests = getGuests();

const getCheckInDate = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;

  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  return `${mm}/${dd}/${yyyy}`;
};

const getCheckOutDate = () => {
  const today = new Date();
  let dd = today.getDate() + 1;
  let mm = today.getMonth() + 1;

  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  return `${mm}/${dd}/${yyyy}`;
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      value: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getLocation(locationId) {
    let hostelLocation;
    this.props.locations.forEach((location) => {
      if (location._id === locationId) {
        hostelLocation = `${location.city}, ${location.country}`;
      }
    });
    return hostelLocation;
  }

  handleClick() {
    this.setState(prevState => (
      { clicked: !prevState.clicked }
    ));
  }

  findLocationId(query) {
    query = query.toLowerCase();
    let locationId;
    this.props.locations.forEach((location) => {
      const city = location.city.toLowerCase();
      if (city.includes(query)) {
        locationId = location._id;
      }
    });
    return locationId;
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const locationId = this.findLocationId(this.state.value);
    this.state.value = '';
    this.props.getHostel(locationId);
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="Location">LOCATION</label>
              <div className="location">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.value}
                  placeholder={
                    this.props.locations.length > 0 && !this.state.clicked ?
                    `${this.props.name}, ${this.getLocation(this.props.location_id)}` : 'Search by city...'
                  }
                  onClick={this.handleClick.bind(this)}
                  onChange={this.handleChange}
                />
                <i className="fas fa-crosshairs" />
              </div>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="Check-in">CHECK-IN</label>
              <div className="calendar">
                <input type="text" className="form-control" placeholder={getCheckInDate()} />
                <i className="far fa-calendar-alt"></i>
              </div>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="Check-out">CHECK-OUT</label>
              <div className="calendar">
                <input type="text" className="form-control" placeholder={getCheckOutDate()} />
                <i className="far fa-calendar-alt"></i>
              </div>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="Check-out">GUESTS</label>
              <select type="text" className="form-control" placeholder="2 Guests">
                {
                  guests.map(guest => (
                    <option value={guest}>{guest}</option>
                  ))
                }
              </select>
            </div>
            <div className="form-group col-md-2 search">
              <input type="submit" className="btn search-btn" value="Search" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  name: PropTypes.string,
  location_id: PropTypes.string,
  locations: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  })).isRequired,
  getHostel: PropTypes.func.isRequired,
};

export default Search;
