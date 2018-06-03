import React from 'react';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hostels: [],
      locations: [],
    };
  }

  componentDidMount() {
    axios({
      url: '/hostels',
      method: 'GET',
    })
      .then((response) => {
        console.log('response.data: ', response.data);
      })
      .catch((error) => {
        console.log("Client couldn't get data: ", error);
      });
  }

  render() {
    return (
      <div>
        {this.state.hostels}
      </div>
    );
  }
}

export default App;
