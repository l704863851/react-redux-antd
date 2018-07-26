import axios from 'axios'
const http = axios.create({
  baseURL: '',
  timeout: 10000
})

export const MOVIE_LIST = 'MOVIE_LIST'

export const httpMovieList = () => dispatch => {
  try {
    http({
      method: 'get',
      url: '/v2/movie/in_theaters',
      params: {
        apikey: '0b2bdeda43b5688921839c8ecb20399b',
        start: 1,
        count: 10
      }
    }).then(res => {
      dispatch({
        type: MOVIE_LIST,
        data: res.data
      })
    })
  } catch (err) {

  }
}