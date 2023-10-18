import React, { useEffect } from 'react';
import Header from './header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Maincontainer from './maincontainer';
import SecondaryContainer from './secondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedmovies from '../hooks/useTopRatedmovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedmovies();
  useUpcomingMovies();



  return (
    <div>
    <Header />
    <Maincontainer/>
    <SecondaryContainer/>

    </div>
  )
}

export default Browse