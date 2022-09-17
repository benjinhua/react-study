// 路由组件懒加载
import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route } from 'react-router-dom'

const Home = lazy(() => import('../BottomBar'))

export default class Demo extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          {/* 注册路由 */}
          <Route path="/home" component={Home}></Route>
        </Suspense>
      </div>
    )
  }
}
