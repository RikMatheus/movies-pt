import React, { useEffect, useState, useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import MoviesList from '../MoviesList'

import reducer from '../../utils/store/reducers/moviesReducer'
import { fetchTopRatedMovies } from '../../utils/store/actions'
import { getMovies } from '../../utils/store/selectors'

import { StyledLibrary } from './styles'

export default function MovieLibrary() {
  const dispatch = useDispatch()
  const movies = useSelector(getMovies)
  const observerRef = useRef(null)

  const [currentPage, setCurrentPage] = useState(3)
  const [observerVisibility, setObserverVisibility] = useState(false)

  const observe = (entries) => {
    const [entry] = entries
    setObserverVisibility(entry.isIntersecting)
  }

  useEffect(() => {
    dispatch(fetchTopRatedMovies(1))
    dispatch(fetchTopRatedMovies(2))
  }, [])  
  
  useEffect(() => {
    dispatch(fetchTopRatedMovies(currentPage)) 
  }, [currentPage])

  useEffect(() => {
    const observer = new IntersectionObserver(observe, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    })
    
    if (observerRef.current) observer.observe(observerRef.current)

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current)
    }
  }, [observerRef])

  useEffect(() => {
    if(observerVisibility) {
      setCurrentPage(currentPage + 1)
    }
  }, [observerVisibility])

  return (
    <StyledLibrary>
      <div className="library">
        { movies.length && <MoviesList movies={movies}/> }
      </div>
      <div className="observer" ref={observerRef}>
        <span className="loader"></span>
        <p>Loading more movies...</p>
      </div>
    </StyledLibrary>
  )
}

export {reducer}