import { createSlice } from "@reduxjs/toolkit";

 const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptBtn:false
    },
    reducers:{
        toggleGptBtn:(state,action)=>{
            state.showGptBtn = !state.showGptBtn
        }
    }
 })

 export const {toggleGptBtn} = gptSlice.actions;
 export default gptSlice.reducer;