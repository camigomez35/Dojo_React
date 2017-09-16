import React, { Component } from 'react';
import axios from 'axios';

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

class Nasa extends Component {
  constructor(props) {
      super(props)
      this.state = {
        imgUrl : ''
      }
      this.getImage = this.getImage.bind(this)
  }

  getImage(event){
    var self = this
    axios.get(url)
    .then(function (response) {
      console.log(response.data.url);
      self.setState({imgUrl: response.data.url})
    })
    .catch(function (error) {
    })
  }

  render() {
    return (
      <div>
        <img src={this.state.imgUrl}/>
        <br/>
        <button onClick={this.getImage}> PUSH ME </button>
      </div>
    );
  }
}

export default Nasa;
