import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './component/root'
import registerServiceWorker from './registerServiceWorker'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReactThunk from 'redux-thunk'
import reducer from './reducer'

let middleware = [ReactThunk]

let store = createStore(reducer, applyMiddleware(...middleware))

moment.locale('zh-cn')

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zh_CN}>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
