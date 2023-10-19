import { createSlice } from "@reduxjs/toolkit";

 const apiSlice = createSlice({
    name:'api',
    initialState:{
        showapiBtn:false
    },
    reducers:{
        toggleapiBtn:(state,action)=>{
            state.showapiBtn = !state.showapiBtn
        }
    }
 })

 export const {toggleapiBtn} = apiSlice.actions;
 export default apiSlice.reducer;