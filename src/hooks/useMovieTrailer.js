import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailer } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailer);
    const getMovieTrailer = async()=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS);
    const json = await data.json();
    const filterTrailer = json?.results?.filter((movie)=> movie.type === "Trailer");
    const finalTrailer =filterTrailer?.length > 0 ?  filterTrailer[0] : json?.results&&json?.results[0];
    dispatch(addTrailer(finalTrailer))
    return finalTrailer;
    }
    
    useEffect(()=>{
        !trailerVideo && getMovieTrailer();
    },[])
}

export default useMovieTrailer