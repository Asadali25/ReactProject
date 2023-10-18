import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import searchGptSlice from "./searchGptSlice";
import configSlice from "./configSlice";

export const appStore = configureStore({
    reducer:{
        user:userSlice,
        movies:movieSlice,
        gpt:searchGptSlice,
        config:configSlice
    }
})