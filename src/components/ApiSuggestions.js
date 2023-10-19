import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const ApiSuggestions = () => {
  const moviesByPersonList = useSelector((store)=> store?.movies?.moviesByPersonList)
  return (
    <div>
       {moviesByPersonList && moviesByPersonList?.map ((movie)=>(
          
            <MoviesList  
            title = {movie?.known_for_department}
            moviesList= {movie?.known_for}
            />
        
        ))}
    </div>
  )
}

export default ApiSuggestions