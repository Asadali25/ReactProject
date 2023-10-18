import { createSlice } from "@reduxjs/toolkit";

 const configSlice = createSlice({
name:'config',
initialState:{
preferedLan:'English'
},
reducers:{
    addPreferedLan:(state,action)=>{
      state.preferedLan=  action.payload
    }
}

 });

 export const {addPreferedLan} = configSlice.actions;
 export default configSlice.reducer;