import React, { useState } from 'react'
import './App.css'
import MovieCard from './components/Movie_Card'
import movieData from './data'

function App() {
  let [movies, setMovies] = useState(movieData)
  console.log(movies[0].ratings)

  let [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <nav className='app__nav'>
        <h1 className='app__title'>Movie Search App</h1>

        <form action=''>
          <input
            type='search'
            placeholder='search here'
            className='app__search-input'
            onChange={handleSearch}
          />
        </form>
      </nav>
      <div className='app__movie-container'>
        <div className='app__movie-list'>
          {movies
            .filter((movie) => {
              return movie.title.toLowerCase().includes(searchTerm)
            })
            .map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />
            })}
        </div>
      </div>
    </>
  )
}

export default App
