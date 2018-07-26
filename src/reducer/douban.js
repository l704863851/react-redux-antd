import {
  DOUBAN_RELEASED_LIST,
  DOUBAN_INTRODUCTION_LIST,
  DOUBAN_IMAGE_LIST,
  DOUBAN_SHORT_COMMENT_LIST,
  DOUBAN_FILM_REVIEW_LIST
} from '../action/douban'

// 上映
export const doubanReleasedList = (state = {}, action) => {
  switch (action.type) {
    case DOUBAN_RELEASED_LIST:
      return action.data
    default:
      return state
  }
}

// 介绍
export const doubanIntroductionList = (state = {}, action) => {
  switch (action.type) {
    case DOUBAN_INTRODUCTION_LIST:
      return action.data
    default:
      return state
  }
}

// 图片
export const doubanImageList = (state = {}, action) => {
  switch (action.type) {
    case DOUBAN_IMAGE_LIST:
      return action.data
    default:
      return state
  }
}

// 短评
export const doubanShortList = (state = {}, action) => {
  switch (action.type) {
    case DOUBAN_SHORT_COMMENT_LIST:
      return action.data
    default:
      return state
  }
}

// 影评
export const doubanFilmReviewList = (state = {}, action) => {
  switch (action.type) {
    case DOUBAN_FILM_REVIEW_LIST:
      return action.data
    default:
      return state
  }
}