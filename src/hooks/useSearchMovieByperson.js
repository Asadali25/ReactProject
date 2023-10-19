import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import {  addMoviesByPerson } from '../utils/movieSlice';

const useSearchMovieByperson = (person) => {
    const dispatch = useDispatch();

    const getMoviesByPerson =async ()=>{
    const data = await fetch(`https://api.themoviedb.org/3/search/person?query=${person}&include_adult=false&page=1`,
    API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMoviesByPerson(json?.results))
    }
    
    useEffect(()=>{
      getMoviesByPerson()
    },[])
  
}

export default useSearchMovieByperson