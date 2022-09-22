import React, { Component, useState, useEffect } from 'react'

// class Demo extends Component {
//   render() {
//     return (
//       <div>index</div>
//     )
//   }
// }

function Demo() {
  const [ count, setCount ] = useState<number>(0);

  useEffect(()=>{
    // 相当于componentDidMount

    // return的函数相当于componentWillUnmount
    return () => { // 组件卸载前执行

    }
  },[])

  function add() {
    // setCount(count + 1); 第一种写法
    setCount(oldVal => oldVal + 1) // 第二种写法 接收函数 参数为上次的值
  }
  return (
    <div>
      index {count}
      <button onClick={add}>count++</button>
    </div>
  )
}

export default Demo;
