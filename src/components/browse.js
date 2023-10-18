import React, { useEffect } from 'react';
import Header from './header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Maincontainer from './maincontainer';
import SecondaryContainer from './secondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedmovies from '../hooks/useTopRatedmovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector((store)=> store?.gpt?.showGptBtn);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedmovies();
  useUpcomingMovies();



  return (
    <div>
    <Header />
    {showGptSearch &&<GptSearch />}
    {!showGptSearch &&<>
    <Maincontainer/>
    <SecondaryContainer/>
    </>
    }

    </div>
  )
}

export default Browse