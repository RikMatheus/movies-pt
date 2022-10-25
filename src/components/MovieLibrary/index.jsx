import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import MoviesList from '../MoviesList'

import reducer from '../../utils/store/reducers/moviesReducer'
import { fetchTopRatedMovies } from '../../utils/store/actions'
import { getMovies } from '../../utils/store/selectors'

import { StyledLibrary } from './styles'

export default function MovieLibrary() {
  const dispatch = useDispatch()
  const movies = useSelector(getMovies)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    dispatch(fetchTopRatedMovies(currentPage))
  }, [currentPage])

  return(
    <StyledLibrary>
      <button onClick={() => setCurrentPage(currentPage + 1)}>
        load more movies
      </button>
      <div className="library">
        { movies.length && <MoviesList movies={movies}/> }
      </div>
    </StyledLibrary>)
}

export {reducer}