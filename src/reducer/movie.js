import { MOVIE_LIST } from '../action/movie'

const movieList = (state = [], action) => {
  switch(action.type) {
    case MOVIE_LIST:
      return action.data
    default:
      return state
  }
}

export default movieList