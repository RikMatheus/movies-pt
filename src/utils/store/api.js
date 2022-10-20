import axios from 'axios'
const api_key = '54ffed57deb5a7a8688be4de3007e578'

export default {
  "fetchMovies": async function fetchTMDBMovies(page) {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing`, {
        params: {
          api_key,
          page
        }
      }
    )

    return res.data ? res.data.results : []
  }
}