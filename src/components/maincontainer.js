import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './videoTitle'
import VideoBackground from './VideoBackground'

const Maincontainer = () => {
const nowPlayingMoviesList = useSelector((store)=> store?.movies?.nowPlayingMoviesList);
if(nowPlayingMoviesList.length === 0) return;
const mainMovie = nowPlayingMoviesList[0];
const {original_title ,overview ,id} = mainMovie

  return (
    <div>
        <VideoTitle 
        title ={original_title}
        overview={overview}
        />
        <VideoBackground 
        movieId ={id}
        />
    </div>
  )
}

export default Maincontainer