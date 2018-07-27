import Loadable from 'react-loadable';// 代码分割动态加载模块
import Loading from '../other/loading';
export { default as http } from './http';

// try catch 网络错误
export function _tryCatch(fn) {
  try {
    fn()
  } catch(err) {
    console.log('网络错误!')
  }
}

// 封装组件并返回
export function packageComponent(_component) {
  return Loadable({
    loader: _component,
    loading: Loading,
    timeout: 10000
  })
}