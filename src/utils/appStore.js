import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import searchapiSlice from "./searchapiSlice";
import configSlice from "./configSlice";

export const appStore = configureStore({
    reducer:{
        user:userSlice,
        movies:movieSlice,
        api:searchapiSlice,
        config:configSlice
    }
})