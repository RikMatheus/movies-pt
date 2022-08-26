import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import MoviesList from '../MoviesList'

import reducer from '../../utils/store/reducers/moviesReducer'
import {fetchTopRatedMovies} from '../../utils/store/actions'
import { getMovies } from '../../utils/store/selectors'

import { StyledLibrary } from './styles'

export default function MovieLibrary() {
  const dispatch = useDispatch()
  const movies = useSelector(getMovies)

  useEffect(() => {
    dispatch(fetchTopRatedMovies())
  }, [])

  return(
    <StyledLibrary>      
      <div className="library">
        { movies.length && <MoviesList movies={movies}/> }
      </div>
    </StyledLibrary>)
}

export {reducer}