import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import {  addPopularMoviesList } from '../utils/movieSlice';

const useTopRatedmovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

    const getTopRatedMovies =async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",
    API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMoviesList(json?.results))
    }
    
    useEffect(()=>{
     !topRatedMovies && getTopRatedMovies()&&console.log(topRatedMovies ,'topRatedMovies')
    },[])
  
}

export default useTopRatedmovies