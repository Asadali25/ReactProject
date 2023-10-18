import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMoviesList:[],
        popularMoviesList:[],
        topRatedMovies:[],
        upcomingMovies:[],
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
        addTrailer:(state,action)=>{
            state.trailer = action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailer ,addPopularMoviesList,addTopRatedMoviesList ,addUpcomingMoviesList} = movieSlice.actions;

export default movieSlice.reducer;