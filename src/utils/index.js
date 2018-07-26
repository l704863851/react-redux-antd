export { default as http } from './http'

// try catch 网络错误
export function _tryCatch(fn) {
  try {
    fn()
  } catch(err) {
    console.log('网络错误!')
  }
}