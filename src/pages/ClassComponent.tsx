import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props:any) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timer = setInterval(()=>{
      this.setState({
        date: new Date()
      })
    },1000)
  }

  render() {
    const { date } = this.state;
    return (
      <div>{ date.toLocaleTimeString() }</div>
    )
  }
}
