import React from 'react';
import { TMDB_IMG_URL } from '../utils/constants';

const   MovieCard = (movie) => {

  return (
    <div className='w-40 pr-3 cursor-pointer'>
     {movie?.movie?.poster_path && <img   src={`${TMDB_IMG_URL+movie?.movie?.poster_path}`} />}
    </div>
  )
}

export default MovieCard