import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMoviesList = useSelector((store) => store.movies.nowPlayingMoviesList);

    const getNowPlayingMoviesList =async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",
    API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results))
    }
    
    useEffect(()=>{
      !nowPlayingMoviesList && getNowPlayingMoviesList()
    },[])
  
}

export default useNowPlayingMovies