import React, { Component } from 'react'

export default class SetStatePage extends Component {
  constructor(props:any) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  componentWillMount() {
    //组件卸载之前
    console.log(" Foo componentWillUnmount");
  }

  shouldComponentUpdate(nextProps:any, nextState:any) {
    // 是否更新
    return true;
  }

  changeValue = (v: number) => {
    // setState 异步
    // setState 在setTimeout和原生事件中是同步的
    // callback,更新完之后执行
    this.setState({
      counter: this.state.counter + v
    })
    // 链式调用
    // setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数
    this.setState(state=>{
      return {
        counter: state.counter + v
      }
    })
  }
  setCounter() {
    this.changeValue(1);
  }
  render() {
    return (
      <>
        <div>SetStatePage</div>
        <button onClick={this.setCounter}>{this.state.counter}</button>
      </>
    )
  }
}
