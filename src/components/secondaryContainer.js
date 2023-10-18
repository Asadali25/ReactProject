import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const moviesList = useSelector((store)=>store?.movies)

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
      <MoviesList 
      title ='Now Playing'
      moviesList= {moviesList?.nowPlayingMoviesList}
      />
      <MoviesList 
      title ='Top Rated'
      moviesList= {moviesList?.topRatedMovies}
      />
      <MoviesList 
      title ='Popular'
      moviesList= {moviesList?.popularMoviesList}
      />
      <MoviesList 
      title ='Upcoming Movies'
      moviesList= {moviesList?.upcomingMovies}
      />
      </div>
    </div>
  )
}

export default SecondaryContainer