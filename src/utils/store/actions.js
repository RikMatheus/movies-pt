import {LOAD_MOVIES} from '../../actionTypes'
import topRatedMovies from '../mocks/topTatedMovies'
import API from './api'

export function fetchTopRatedMovies(page) {
  return function (dispatch) {
    return API.fetchMovies(page).then(movies => {
      dispatch({
        type: LOAD_MOVIES,
        payload: movies
      })
    })
  }
}
