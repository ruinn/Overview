import React from 'react';
import axios from 'axios';
import Search from './Search';
import Nav from './Nav';
import Review from './Review';
import Photos from './Photos';
import PhotoModal from './PhotoModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hostel: {},
      locations: [],
      highlight: {},
      lightbox: false,
      currentSlide: {},
    };

    this.getHostel = this.getHostel.bind(this);
    this.toggleLightbox = this.toggleLightbox.bind(this);
    this.updateCurrentSlide = this.updateCurrentSlide.bind(this);
  }

  componentDidMount() {
    if (this.state.locations.length === 0) {
      this.getLocations();
    }
    this.getHostel();
  }

  getHostel(locationId) {
    axios({
      url: `http://localhost:3002/api/hostels/${locationId}/info`,
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
      url: 'http://localhost:3002/api/hostels',
      method: 'GET',
    })
      .then((response) => {
        this.setState({
          locations: response.data,
        });
      })
      .catch((error) => {
        console.log("Client couldn't get locations: ", error);
      });
  }

  toggleLightbox() {
    this.setState(prevState => (
      { lightbox: !prevState.lightbox }
    ));
  }

  updateCurrentSlide(slideIndex, slideUrl) {
    this.setState({
      currentSlide: {
        slideIndex,
        slideUrl,
      },
    });
  }

  render() {
    return (
      <div>
        <div id="search">
          <div className="container">
            <Search
              name={this.state.hostel.name}
              location_id={this.state.hostel.location_id}
              locations={this.state.locations}
              getHostel={this.getHostel}
            />
          </div>
        </div>
        <Nav />
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
        {
          Object.keys(this.state.hostel).length > 0 &&
          <Photos
            urls={this.state.hostel.photos}
            toggleLightbox={this.toggleLightbox}
            updateCurrentSlide={this.updateCurrentSlide}
          />
        }
        {
          Object.keys(this.state.hostel).length > 0 &&
          <PhotoModal
            lightbox={this.state.lightbox}
            toggleLightbox={this.toggleLightbox}
            urls={this.state.hostel.photos}
            currentSlide={this.state.currentSlide}
          />
        }
      </div>
    );
  }
}

export default App;
