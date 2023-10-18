import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import {  addPopularMoviesList } from '../utils/movieSlice';

const useTopRatedmovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies =async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",
    API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMoviesList(json?.results))
    }
    
    useEffect(()=>{
      getTopRatedMovies()
    },[])
  
}

export default useTopRatedmovies