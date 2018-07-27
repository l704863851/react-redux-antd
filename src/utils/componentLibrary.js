import React from 'react'
import { packageComponent } from './index'

export const Home = packageComponent(() => import('@/component/home'))

export function authenticationRole(Component, role) {
  return (props) => {
    return <Component {...props} />
  }
}
