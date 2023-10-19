import React, { useEffect } from 'react';
import Header from './header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Maincontainer from './maincontainer';
import SecondaryContainer from './secondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedmovies from '../hooks/useTopRatedmovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import ApiSearch from './ApiSearch';
import { useSelector } from 'react-redux';
import useSearchMovieByperson from '../hooks/useSearchMovieByperson';

const Browse = () => {
  const showapiSearch = useSelector((store)=> store?.api?.showapiBtn);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedmovies();
  useUpcomingMovies();
  useSearchMovieByperson();



  return (
    <div>
    {showapiSearch &&<ApiSearch />}
    {!showapiSearch &&<>
      <Header />

    <Maincontainer/>
    <SecondaryContainer/>
    </>
    }

    </div>
  )
}

export default Browse