import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import {  addUpcomingMoviesList } from '../utils/movieSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies.upcomingMovies);
    const getUpcomingMoviesList =async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",
    API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMoviesList(json?.results))
    }
    
    useEffect(()=>{
      !topRatedMovies && getUpcomingMoviesList()
    },[])
  
}

export default useUpcomingMovies