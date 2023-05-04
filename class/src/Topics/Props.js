import React, { Component } from 'react'
import Props1 from './Props1'

export default class Props extends Component {
    state ={
        name :"Heelo this is props"
    }
  render() {
    return (
      <div>
        <Props1 data={this.state.name}/>
      </div>
    )
  }
}
