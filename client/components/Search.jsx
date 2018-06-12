import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getCheckInDate() {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;

    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return mm + '/' + dd + '/' + yyyy;
  }

  getCheckOutDate() {
    const today = new Date();
    let dd = today.getDate() + 1;
    let mm = today.getMonth() + 1;

    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return mm + '/' + dd + '/' + yyyy;
  }

  render() {
    return (
      <div className="search-bar">
        <form>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="Location">LOCATION</label>
              <div className="location">
                <input type="text" className="form-control" placeholder="Search by city or hostel name.." />
                <i className="fas fa-crosshairs" />
              </div>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="Check-in">CHECK-IN</label>
              <input type="text" className="form-control" placeholder={this.getCheckInDate()} />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="Check-out">CHECK-OUT</label>
              <input type="text" className="form-control" placeholder={this.getCheckOutDate()} />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="Check-out">GUESTS</label>
              <input type="text" className="form-control" placeholder="2 Guests" />
            </div>
            <div className="form-group col-md-2 search">
              <input type="button" className="btn search-btn" value="Search" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
