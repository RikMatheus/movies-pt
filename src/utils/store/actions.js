import {LOAD_MOVIES} from '../../actionTypes'
import topRatedMovies from '../mocks/topTatedMovies'
import API from './api'

export function fetchTopRatedMovies(page) {
  return (dispatch) => {
    return API.fetchMovies(page).then(movies => {
      dispatch({
        type: LOAD_MOVIES,
        info: 'Loads movies from API',
        payload: movies
      })
    })
  }
}
