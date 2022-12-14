import React, { Component, useState, useEffect, useRef } from 'react'

// class Demo extends Component {
//   render() {
//     return (
//       <div>index</div>
//     )
//   }
// }

function DemoHook() {
  const [ count, setCount ] = useState<number>(0);

  const myRef: any = useRef();
/*
  useEffect(()=>{
    // 相当于componentDidMount

    // return的函数相当于componentWillUnmount
    return () => { // 组件卸载前执行

    }
  },[]) // 传空数组，只执行一次
  */

  useEffect(() => {
    console.log(11)
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  }); // 不传任何值 代表监听所有值

  function add() {
    // setCount(count + 1); 第一种写法
    setCount(oldVal => oldVal + 1) // 第二种写法 接收函数 参数为上次的值
  }
  return (
    <div>
      index {count}
      <input type="text" ref={myRef}/>
      <button onClick={add}>count++</button>
    </div>
  )
}

export default DemoHook;
