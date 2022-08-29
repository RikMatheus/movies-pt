import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import moviesReducer from './utils/store/reducers/moviesReducer'
import MovieLibrary from './components/MovieLibrary'

const store = configureStore({
  reducer: {
    movies: moviesReducer
  }
})

export default function App() {
  return (
    <Provider store={store}>
      <MovieLibrary />
    </Provider>)
}
