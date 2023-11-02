import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMoviesList:null,
        popularMoviesList:null,
        topRatedMovies:null,
        upcomingMovies:null,
        moviesByPersonList:null,
        movieName:null,
        trailer:null,
        
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMoviesList = action.payload;
        },
        addPopularMoviesList:(state,action)=>{
            state.popularMoviesList = action.payload;
        },
        addTopRatedMoviesList:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMoviesList:(state,action)=>{
            state.upcomingMovies = action.payload;
        },
        addMoviesByPerson:(state,action)=>{
            state.moviesByPersonList = action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailer = action.payload
        },
        clearMoviesByPerson:(state)=>{
            state.moviesByPersonList =[];
        }
    }
})

export const {addNowPlayingMovies,addTrailer ,addPopularMoviesList,addTopRatedMoviesList ,addUpcomingMoviesList ,addMoviesByPerson , clearMoviesByPerson} = movieSlice.actions;

export default movieSlice.reducer;