import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './videoTitle'
import VideoBackground from './VideoBackground'

const Maincontainer = () => {
const nowPlayingMoviesList = useSelector((store)=> store?.movies?.nowPlayingMoviesList);
if(!nowPlayingMoviesList) return;
const mainMovie = nowPlayingMoviesList[0];
const {original_title ,overview ,id} = mainMovie

  return (
    <div className=''>
        <VideoTitle 
        title ={original_title}
        overview={overview}
        />
        <div>
        <VideoBackground 
        movieId ={id} 
        />

        </div>
        
    </div>
  )
}

export default Maincontainer