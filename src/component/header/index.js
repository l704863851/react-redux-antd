import React from 'react'
import less from './index.less'
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 1, title: '电影', path: '/home/' },
        { id: 2, title: '电影', path: '/home/1' },
        { id: 3, title: '电影', path: '/home/2' },
        { id: 4, title: '电影', path: '/home/3' },
        { id: 5, title: '电影', path: '/home/4' },
        { id: 6, title: '电影', path: '/home/5' },
        { id: 7, title: '电影', path: '/home/6' }
      ]
    }
  }
  render() {
    return (
      <div className={less.header}>
        <ul className={less.nav}>
          {this.state.list.map((item, index) => {
            return (
              <li className={less['nav-item']} key={index}>
                <NavLink to={item.path} activeClassName={less['nav-item-a-active']} className={less['nav-item-a']}>{item.title}</NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
