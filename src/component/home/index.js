import React from 'react'
import less from './index.less'
import Header from '@/component/header'
import Footer from '@/component/footer'

export default class Home extends React.Component {
  render() {
    return (
      <div className={less.container}>
        <Header/>
        <div>HOME</div>
        <Footer/>
      </div>
    )
  }
}