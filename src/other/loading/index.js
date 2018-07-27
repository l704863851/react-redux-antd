import React from 'react'
import './index.less'
import ImgLoading from '../../assets/img/loading.gif'

export default class Loading extends React.PureComponent {
  static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {}
  }
  makeType(p) {
    let msg
    if (p.error) {
      msg = '加载错误,请刷新页面'
    } else if (p.timeOut) {
      msg = '加载超时'
    } else if (p.pastDelay) {
      msg = '加载中...'
    }
    return msg
  }
  render() {
    return (
      <div>
        <img src={ImgLoading} alt="加载中..." />
        <div>{this.makeType(this.props)}</div>
      </div>
    )
  }
}
