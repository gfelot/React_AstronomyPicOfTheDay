import React, { Component } from 'react';
import AstronomyCard from "./AstronomyCard"
import axios from 'axios'

class AstronomyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      astronomy: []
    }
  }

  componentDidMount() {
    const API_KEY = 'wMcjA53CZNdV0OLhoWiEGiQS0mNb5LyMaxiXYkEo'
    const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='

    axios.get(END_POINT+API_KEY)
      .then(res => {
        this.setState({
          astronomy: res.data
        });
      })
      .catch(e => {
        console.log(error)
      })
  }
  
  
  
  render() {
    const { astronomy } = this.state
    return (
      <AstronomyCard data={astronomy} />
    );
  }
}

export default AstronomyContainer;