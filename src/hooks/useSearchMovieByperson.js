import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import {  addMoviesByPerson } from '../utils/movieSlice';

const useSearchMovieByperson = (person) => {
    const dispatch = useDispatch();
    const moviesByPersonList = useSelector((store) => store.movies.moviesByPersonList);

    const getMoviesByPerson =async ()=>{
    const data = await fetch(`https://api.themoviedb.org/3/search/person?query=${person}&include_adult=false&page=1`,
    API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMoviesByPerson(json?.results))
    }
    
    useEffect(()=>{
     !moviesByPersonList && getMoviesByPerson()
    },[])
  
}

export default useSearchMovieByperson