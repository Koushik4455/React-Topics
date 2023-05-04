import React, { Component } from 'react'

export default class State extends Component {
    state ={
        name : "koushik",
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}
