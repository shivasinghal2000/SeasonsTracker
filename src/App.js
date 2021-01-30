import './App.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { latitude: null }
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude })
      },
      (err) => {
        return console.log(err)
      }
    )
  }

  render () {
    return <div>Latitude : {this.state.latitude}</div>
  }
}

export default App
