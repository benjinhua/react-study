import React, { Component } from 'react'

export default class Parent extends Component {
  render() {
    return (
      <div>
        <h3>我是Parent</h3>
        <Child></Child>
      </div>
    )
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        <h3>我是child</h3>
      </div>
    )
  }
}
