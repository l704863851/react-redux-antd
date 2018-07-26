import { http, _tryCatch } from '../utils'

// 电影上映 可选参数：start: 页码，count: 数量，city: 城市
export const DOUBAN_RELEASED_LIST = 'DOUBAN_RELEASED_LIST'
export const httpDoubanReleasedList = () => dispatch => {
  _tryCatch(() => {
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
        type: DOUBAN_RELEASED_LIST,
        data: res.data
      })
      return res.data
    })
  })
}

// 电影介绍 { 路径参数：电影ID }
export const DOUBAN_INTRODUCTION_LIST = 'DOUBAN_INTRODUCTION_LIST'
export const httpDoubanIntroductionList = (id) => dispatch => {
  _tryCatch(() => {
    http({
      method: 'GET',
      url: `http://api.douban.com/v2/movie/subject/${id}`,
      params: {
        apikey: '0b2bdeda43b5688921839c8ecb20399b'
      }
    }).then(res => {
      dispatch({
        type: DOUBAN_INTRODUCTION_LIST,
        data: res.data
      })
    })
  })
}

// 电影图片 { 路径参数：电影ID }GET参数：数量count,从第几个开始start
export const DOUBAN_IMAGE_LIST = 'DOUBAN_IMAGE_LIST'
export const httpDoubanImageList = (id) => dispatch => {
  _tryCatch(() => {
    http({
      method: 'GET',
      url: `https://api.douban.com/v2/movie/subject/${id}/photos`,
      params: {
        apikey: '0b2bdeda43b5688921839c8ecb20399b'
      }
    }).then(res => {
      dispatch({
        type: DOUBAN_IMAGE_LIST,
        data: res.data
      })
    })
  })
}

// 电影短评 { 路径参数：电影ID }GET参数：数量count,从第几个开始start
export const DOUBAN_SHORT_COMMENT_LIST = 'DOUBAN_SHORT_COMMENT_LIST'
export const httpDoubanShortCommentList = (id) => dispatch => {
  _tryCatch(() => {
    http({
      method: 'GET',
      url: `https://api.douban.com/v2/movie/subject/${id}/reviews`,
      params: {
        apikey: '0b2bdeda43b5688921839c8ecb20399b'
      }
    }).then(res => {
      dispatch({
        type: DOUBAN_SHORT_COMMENT_LIST,
        data: res.data
      })
    })
  })
}

// 电影影评 { 路径参数：电影ID }GET参数：数量count
export const DOUBAN_FILM_REVIEW_LIST = 'DOUBAN_FILM_REVIEW_LIST'
export const httpDoubanFilmReviewList = (id) => dispatch => {
  _tryCatch(() => {
    http({
      method: 'GET',
      url: `https://api.douban.com/v2/movie/subject/${id}/comments`,
      params: {
        apikey: '0b2bdeda43b5688921839c8ecb20399b'
      }
    }).then(res => {
      dispatch({
        type: DOUBAN_FILM_REVIEW_LIST,
        data: res.data
      })
    })
  })
}