import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="Check-out">CHECK-OUT</label>
              <input type="text" className="form-control" placeholder="Last name" />
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
