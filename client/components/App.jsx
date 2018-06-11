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
      locations: {},
      highlight: {},
      lightbox: false,
      currentSlide: '',
    };

    this.toggleLightbox = this.toggleLightbox.bind(this);
    this.updateCurrentSlide = this.updateCurrentSlide.bind(this);
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

  toggleLightbox() {
    this.setState(prevState => (
      { lightbox: !prevState.lightbox }
    ));
  }

  updateCurrentSlide(slideUrl) {
    this.setState({ currentSlide: slideUrl });
  }

  render() {
    return (
      <div>
        <div id="search">
          <div className="container">
            <Search />
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
