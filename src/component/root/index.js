import React, { Component } from 'react'
import { Switch, Router, Route, Redirect } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import Loadable from 'react-loadable';// 代码分割动态加载模块
import { authenticationRole, Home } from '../../utils/componentLibrary'
import './index.less'

const history = createHistory()

export default class App extends Component {
  componentDidMount() {
    Loadable.preloadAll()
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" render={authenticationRole(Home)} />
        </Switch>
      </Router>
    )
  }
}
