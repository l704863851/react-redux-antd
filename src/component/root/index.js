import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import { httpDoubanReleasedList } from '../../action/douban'

@connect(
  (state, ownProps) => {
    return {
      doubanReleasedList: state.doubanReleasedList
    }
  },
  (dispatch, ownProps) => {
    return {
      httpDoubanReleasedList: () => dispatch(httpDoubanReleasedList())
    }
  }
)
export default class App extends Component {
  componentDidMount() {
    this.props.httpDoubanReleasedList()
  }

  render() {
    return <div>{JSON.stringify(this.props.doubanReleasedList)}</div>
  }
}
