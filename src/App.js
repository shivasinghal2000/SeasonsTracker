import './App.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor (props) {
    super(props)
    // this.state = { latitude: null, errorMessage: '' }
  }
  state = { latitude: null, errorMessage: '' } 
  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude })
      },
      (err) => {
        // return console.log(err)
        this.setState({ errorMessage: err.message })
      }
    )
  }

  render () {
    if (this.state.errorMessage && !this.state.latitude) {
      return (
        <div>
          Error :  {this.state.errorMessage}
        </div>
      )
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          Latitude : {this.state.latitude}
        </div>
      )
    }
    if (!this.state.errorMessage && !this.state.latitude) {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

export default App
