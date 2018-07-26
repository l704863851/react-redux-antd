import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux";
import movie from './movie'

const RootReducer = combineReducers({
  routing: routerReducer,
  movie
})

export default RootReducer