import React from 'react';
import axios from 'axios';
import Nav from './Nav';
import Review from './Review';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hostel: {},
      locations: {},
      highlight: {},
    };
  }

  componentDidMount() {
    if (Object.keys(this.state.locations).length === 0) {
      this.getLocations();
    }
    this.getHostel();
  }

  getHostel() {
    axios({
      url: `/api/hostels/${this.state.hostel._id}/info`,
      method: 'GET',
    })
      .then((response) => {
        this.setState({
          hostel: response.data.hostel,
          highlight: {
            rating: response.data.rating,
            keyword: response.data.keyword,
            totalReviews: response.data.totalReviews,
            topFeatures: response.data.topFeatures,
          },
        });
      })
      .catch((error) => {
        console.log("Client couldn't get hostel info: ", error);
      });
  }

  getLocations() {
    axios({
      url: '/api/hostels',
      method: 'GET',
    })
      .then((response) => {
        this.state.locations = response.data;
      })
      .catch((error) => {
        console.log("Client couldn't get locations: ", error);
      });
  }

  render() {
    return (
      <div>
        <section id="search">
        Search Component
        </section>
        <Nav />
        <hr />
        <section id="hostel-info">
          <div className="container">
            <div className="row">
              {
                Object.keys(this.state.highlight).length > 0 &&
                <Review highlight={this.state.highlight} />
              }
              <div className="col-md-9">
                <h4>Property Description</h4>
                <p>{this.state.hostel.description}</p>
              </div>
            </div>
          </div>
        </section>
        <div>Photo Component</div>
      </div>
    );
  }
}

export default App;
