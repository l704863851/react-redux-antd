import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux";
import * as douban from './douban'

const RootReducer = combineReducers({
  routing: routerReducer,
  ...douban
})

export default RootReducer