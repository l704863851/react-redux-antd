import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import { httpMovieList } from '../../action/movie'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>{JSON.stringify(this.props.movieList)}</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movieList: state.movieList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    httpMovieList: dispatch(httpMovieList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
